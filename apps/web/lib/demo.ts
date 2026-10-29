// Public demo deployment (demo.restrovia.shop). On by default in this branch;
// set NEXT_PUBLIC_DEMO_MODE=false to turn it off. In demo mode the sign-in page
// shows the shared demo login, and install-level admin screens (Updates) are hidden.
export const DEMO_MODE = process.env.NEXT_PUBLIC_DEMO_MODE !== "false";
