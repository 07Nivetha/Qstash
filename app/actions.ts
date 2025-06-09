"use server"
import { Client } from "@upstash/qstash";

// Initialize the client with proper error handling
const qstashClient = new Client({
  token: process.env.QSTASH_TOKEN!,
});

export async function startBackgroundJob() {
    await qstashClient.publishJSON({
        url: "https://firstqstashmessage.requestcatcher.com/test",
        body: {
          hello: "world",
        },
      })
  try {
    // Check if token exists
    if (!process.env.QSTASH_TOKEN) {
      throw new Error('QSTASH_TOKEN environment variable is not set');
    }

    const result = await qstashClient.publishJSON({
      url: "https://firstqstashmessage.requestcatcher.com/test",
      body: {
        hello: "world",
      },
    });

    console.log('QStash message sent successfully:', result);
    return result;
  } catch (error) {
    console.error('QStash error:', error);
    throw error;
  }
}



