import provider from "@/lib/provider";

export async function GET() {
  try {
    const blockNumber = await provider.getBlockNumber();
    const block = await provider.getBlock(blockNumber);
    return Response.json({ blockNumber, block });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
