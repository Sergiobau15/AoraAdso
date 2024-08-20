import { Client,Account } from 'react-native-appwrite';
export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'co.edu.sena.aora',
    projectId: '66c4e8fb00284386541e',
    databaseId: 'database_aora',
    userCollectionId: '66c4efe40001c5cda15e',
    videoCollectionId: '66c4f0b6001ba932e99a',
    storageId: '66c4f5240031e928c83c'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
    
    
    const account = new Account(client);

    export const createUser = () =>{
        // Register User
        account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
            .then(function (response) {
                console.log(response);
            }, function (error) {
                console.log(error);
            });
        

    }



    ;

