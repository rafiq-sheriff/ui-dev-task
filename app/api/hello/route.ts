import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'Hello from Next.js API!',
    timestamp: new Date().toISOString(),
    path: request.nextUrl.pathname,
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    return NextResponse.json({
      success: true,
      data: body,
      message: 'Data received successfully',
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Invalid JSON body'
      },
      { status: 400 }
    )
  }
}
