import { create } from "zustand";

//Setting a global objects for conversations
//this useConversation will return a global object
const useConversation = create((set) => ({
  selectedConversation: null, //This is like state variable
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }), //This is like setter function
  messages: [], //This is like state variable
  setMessages: (messages) => set({ messages }),//This is like setter function
}));

export default useConversation;
