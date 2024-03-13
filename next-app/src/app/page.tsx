import React from "react";

function page() {
  return (
    <div>
      <h1>Page</h1>
      <p>This is a page</p>

      <style jsx>{`
        h1 {
          color: red;
        }
      `}</style>

      <style jsx global>{`
        body {
          background: black;
        }
      `}</style>
    </div>
  );
}

export default page;
