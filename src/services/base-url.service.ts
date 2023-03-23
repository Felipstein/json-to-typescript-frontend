export function getBaseURL(): string {
  if(window.location.href === 'https://json-to-typescript-frontend.vercel.app/') {
    return 'https://json-to-typescript-backend.onrender.com/v1';
  }

  return 'http://localhost:3333/v1';
}
