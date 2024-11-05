import { withAuth } from "next-auth/middleware";
import { RoleEnum } from "./enums/role";
import { NextRequest } from "next/server";

// export default withAuth(
//   async function middleware(req: NextRequest) {
//     //
//   },
//   {
//     callbacks: {
//       authorized: ({ token, req }) => {
//         if (!token) {
//           return true;
//         }

//         if (token?.userInfo.role === RoleEnum.ADMIN) {
//           return true;
//         }

//         return false;
//       },
//     },
//   }
// );
// Default export must be a middleware function
export default withAuth(
  function middleware(req: NextRequest) {
    // 
  },
  {
    callbacks: {
      authorized: () => {
        return true;
      },
    },
  }
);
export const config = {
  matcher: ["/((?!login).*)"],
};
