const { NextResponse } = require("next/server")

async function GET(request) {
  console.log("Blog GET Hit")
  return NextResponse.json({msg:"¡API funcionando!"})
}