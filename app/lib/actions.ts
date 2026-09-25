"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import postgres from "postgres";
import { z } from "zod";

const sql = postgres(process.env.POSTGRES_URL!);

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(["pending", "paid"]),
  data: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, data: true });
// const UpdateInvoice = Promise

export async function createInvoice(formData: FormData) {
  const rawFormData = {
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  };

  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: rawFormData.customerId,
    amount: rawFormData.amount,
    status: rawFormData.status,
  });
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split("T")[0];
  // Test it out:
  console.log(rawFormData);

  await sql`
  INSERT INTO invoices (customer_id, amount, status, date)
  VALUES (${customerId}, ${amountInCents},  ${status},  ${date})
  `;
  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}
