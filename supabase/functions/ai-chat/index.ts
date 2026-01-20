// Supabase Edge Function: ai-chat
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

type AiRequest = {
  message: string;
  files?: Array<{ path: string; content: string }>;
  schema?: string;
  designState?: Record<string, unknown>;
  image?: string;
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const body = (await req.json()) as AiRequest;

  const response = {
    explanation: "AI response placeholder. Connect Lovable AI Gateway here.",
    file_changes: body.files ?? [],
    follow_ups: ["Generate layout", "Add auth", "Create database"],
  };

  return new Response(JSON.stringify(response), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});
