import provider from "../../../lib/provider";
import { ethers } from "ethers";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const address = searchParams.get("address");

    if (!address) {
      return Response.json({ error: "Address is required" }, { status: 400 });
    }

    const balance = await provider.getBalance(address);
    return Response.json({
      address,
      balance: ethers.formatEther(balance) + " ETH",
    });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
