import { Client, Avatars, Account, OAuthProvider } from "react-native-appwrite";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser"; // To open the authentication URL

// Configuration object for Appwrite
export const config = {
  platform: "com.movestate.reactnative", // Platform identifier
  projectId: process.env.APPWRITE_PUBLIC_PROJECT_ID, // Project ID
  endpoint: process.env.APPWRITE_ENDPOINT, // Endpoint URL
};

// Initialize the Appwrite client
export const client = new Client()
  .setEndpoint(config.endpoint!) // Endpoint URL for Appwrite server
  .setProject(config.projectId!) // Project ID for Appwrite project
  .setPlatform(config.platform); // Set up platform identifier for Appwrite client

// Initialize the Appwrite avatars and Accounts service
export const avatars = new Avatars(client); // Used to generate avatar based on users first and last name upon google auth login
export const account = new Account(client); // Used to manage user accounts such as login, logout, password reset, etc.

const openAuthSessionAsync = async (
  authResponse: string,
  redirectUri: string
) => {
  try {
    const result = await WebBrowser.openAuthSessionAsync(
      authResponse,
      redirectUri
    );
    if (result.type === "success" && result.url) {
      const { queryParams } = Linking.parse(result.url);
      if (queryParams && queryParams.code) {
        // Handle the OAuth2 code here
        return queryParams.code;
      }
    }
    return null;
  } catch (error) {
    console.error("Error during openAuthSessionAsync:", error);
    return null;
  }
};

// Login with Google functionality
export const loginWithGoogle = async () => {
  try {
    // Create a redirect URI for the OAuth2 flow
    const redirectUri = Linking.createURL("/");

    // Initiate the OAuth2 authentication process with Google
    const authResponse = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirectUri
    );

    // Check if the authentication response is valid
    if (!authResponse) {
      throw new Error("Failed to create OAuth2 token");
    }

    // Open the authentication URL in a web browser and handle the redirect
    const resultInBrowser = await openAuthSessionAsync(
      authResponse.toString(),
      redirectUri
    );

    // Check if the authentication was successful
    if (!resultInBrowser) {
      throw new Error("Failed to authenticate with Google");
    }

    // If the result is a string, parse the URL and extract the secret and userId
    if (typeof resultInBrowser === "string") {
      const url = new URL(resultInBrowser);
      const secret = url.searchParams.get("secret")?.toString();
      const userId = url.searchParams.get("userId")?.toString();

      // Check if the secret and userId are present
      if (!secret || !userId) {
        throw new Error("Failed to authenticate with Google");
      }

      // Create an OAuth2 session with Appwrite using the extracted secret and redirect URI
      const createdSession = await account.createOAuth2Session(
        OAuthProvider.Google,
        secret,
        redirectUri
      );

      // Handle the authentication response here
      return createdSession;
    } else {
      throw new Error("Unexpected result type");
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

// Logout functionality
export const logout = async () => {
  try {
    // Delete the current session to log out the user
    await account.deleteSession("current");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// Get user details and generate initials avatar
export const getUser = async () => {
  try {
    // Fetch the user details
    const userResponse = await account.get();

    // Check if the user ID is present
    if (userResponse.$id) {
      // Generate the initials avatar URL based on the user's name
      const userAvatarInitials = avatars
        .getInitials(userResponse.name)
        .toString();
      // Return the user details along with the avatar URL
      return { ...userResponse, avatar: userAvatarInitials };
    }

    // Return the user response if no user ID is found
    return userResponse;
  } catch (error) {
    console.error(error);
    return null;
  }
};
