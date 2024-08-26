function ChatBotComponent() {
  // useEffect(() => {
  //   // Create a script element for loading the external script
  //   const script = document.createElement("script");
  //   script.id = "messenger-widget-b";
  //   script.src = "https://cdn.botpenguin.com/website-bot.js";
  //   script.defer = true;
  //   document.body.appendChild(script);
  //   // Assuming the chatbot script supports global configuration variables
  //   window.botPenguinConfig = {
  //     botIds: ["66c7374a55106e1474af97ff", "66c72026ac50101e4e8ee31e"],
  //     // Add other configuration options here as needed
  //   };
  //   // Cleanup function to remove the script when the component is unmounted
  //   return () => {
  //     document.body.removeChild(script);
  //     delete window.botPenguinConfig; // Clean up global variable
  //   };
  // }, []); // Empty dependency array to ensure this runs only once
  // return null; // No UI component to render
}

export default ChatBotComponent;
