export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const partnerId = searchParams.get("partnerId");
  const partnerName = searchParams.get("partnerName");

  if (!partnerId || !partnerName) {
    return new Response("Missing partnerId or partnerName", { status: 400 });
  }

  return new Response(JSON.stringify({ partnerId, partnerName }), {
    status: 200 
  });
}