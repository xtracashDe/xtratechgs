import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  service: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contacts").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      service_interest: data.service || null,
      message: data.message,
    });
    if (error) {
      throw new Error(error.message);
    }
    return { ok: true };
  });
