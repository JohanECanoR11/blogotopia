export async function POST(req) {
  const { username, password } = await req.json();

  // Asegúrate de tener alguna lógica para verificar el usuario y la contraseña
  if (username === 'admin' && password === 'admin123') {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    return new Response(JSON.stringify({ success: false, message: 'Invalid credentials' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
