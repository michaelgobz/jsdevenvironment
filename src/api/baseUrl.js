export default function getBaseUrl(){
  const inDevelopement = window.location.hostname === 'localhost';
  return inDevelopement ? 'https://localhost:3001': '/';
}
