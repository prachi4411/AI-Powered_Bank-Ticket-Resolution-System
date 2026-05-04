// import React from "react";

// function Layout({ children, isAuth }) {
//   // 🔹 Auth layout (Login/Register UI)
//   if (isAuth) {
//     return (
//       <div style={{ display: "flex", height: "100vh" }}>
        
//         {/* LEFT SIDE */}
//         <div style={{
//           flex: 1,
//           background: "#f5f7fa",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center"
//         }}>
//           <img
//             src="/illustration.png"
//             alt="illustration"
//             style={{ width: "80%" }}
//           />
//         </div>

//         {/* RIGHT SIDE */}
//         <div style={{
//           flex: 1,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center"
//         }}>
//           <div style={{
//             width: "350px",
//             padding: "30px",
//             boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//             borderRadius: "10px"
//           }}>
//             {children}
//           </div>
//         </div>

//       </div>
//     );
//   }

//   // 🔹 Normal layout (Dashboard etc.)
//   return (
//     <div>
//       {/* your existing navbar/sidebar */}
//       {children}
//     </div>
//   );
// }

// export default Layout;
import React from "react";
import "../../styles/auth.css";

function Layout({ children, isAuth }) {
  if (isAuth) {
    return (
      <div className="auth-container">
        
        <div className="left-panel">
          <img src="/illustration.png" alt="illustration" />
        </div>

        <div className="right-panel">
          {children}
        </div>

      </div>
    );
  }

  return <div>{children}</div>;
}

export default Layout;