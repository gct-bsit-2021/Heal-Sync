// export default function initSocketHandlers(io) {
//   io.on("connection", (socket) => {
//     console.log("✅ New client connected:", socket.id);

//     socket.on("register", ({ userId }) => {
//       if (!userId) return;
//       socket.join(String(userId));
//       console.log(`📌 Socket ${socket.id} joined room ${userId}`);
//     });

//     socket.on("disconnect", () => {
//       console.log("❌ Client disconnected:", socket.id);
//     });
//   });
// }
