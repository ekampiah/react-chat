# React Chat
A simple chat app for web and mobile.

# Goals
The main goal of this app is to learn and demonstrate new skills to potential employers or customers. Through this endeavor, I will be acquiring new skills in Google Firebase as well as developing previously encountered concepts in Authentication and NodeJS programming. At app completion, I will have worked extensively on the following skills:
- NextJS (new)
- Firebase Hosting (new)
- Firestore realtime db (new)
- Firebase Auth (beginner)
- NodeJS (beginner)
- React (advanced)

# Feature Overview
React Chat aka ChatEKA is a very simple chat service that will allow users to add/view contacts, and then proceed to communicate with them in direct chats. 

### Sign up
Users are able to sign up with their Gmail accounts. Only supporting Gmail to simplify the process but Facebook/Apple/Microsoft can be added later. Email and password sign up is not supported to avoid having to manage user passwords. Users will be asked to provide a unique username for easy identification.

### Add contacts
A first-time user will not have any other persons to interact with, so their first point of action will be to add contacts. This will be available on the Search screen which can be reached by click on the "Add Contact" button onthe Home screen. On this page, the user can enter part or all of the desired contact's username and send a request to add this person. Once accepted, they can begin communicating with each other.

### Chat
Select from a list of contacts to open the Chat screen and begin communicating.

# Implementation
Given the comprehensive set of features, development will be broken down into the following milestones.

### Milestone 1
- NextJS bootstrap 
- Firebase hosting setup

### Milestone 2
- User sign up with Firebase auth (Google)
- User login

### Milestone 3
- Contacts screen
- Search for contact by username/email
- Remove contacts

### Milestone 4
- Chat list screen
- Chat screen (1-1)

### Milestone 5 (enhancements)
- Allow user avatars (blob storage)
- Edit messages


## Data structure
For the Firestore database, I'll briefly discuss the data model to be used with the motiviations behind each decision.

### Collections
├── users (collection)
|   ├── uniqueUserId (document)
|   |   ├── userId: "uniqueUserId"
|   |   ├── username: "user123"
|   |   ├── email: "user@example.com"
|   |   ├── profilePictureUrl: "url_to_profile_picture"
|   |   ├── createdAt: "timestamp"
|   |   └── lastActive: "timestamp"
|
├── chats (collection)
|   ├── uniqueChatId (document)
|   |   ├── chatId: "uniqueChatId"
|   |   ├── participants: ["userId1", "userId2"]
|   |   └── createdAt: "timestamp"
|   |
|   └── messages (subcollection)
|       ├── uniqueMessageId (document)
|       |   ├── messageId: "uniqueMessageId"
|       |   ├── senderId: "userId"
|       |   ├── text: "Hello, world!"
|       |   ├── createdAt: "timestamp"
|       |   └── chatId: "uniqueChatId"

### Scenarios
1. Get user
    - Simply query users collection and find user based on ID or username
2. Update users
    - Similar to getting a user, requiring one call to find user and one call to update
    - Single source of truth and only one point to update reduces data duplication/redundancy
3. Get conversations for user
    - Query conversations collection which have userId in participants list

# Sources
- [Data modeling](https://medium.com/@henryifebunandu/cloud-firestore-db-structure-for-your-chat-application-64ec77a9f9c0)