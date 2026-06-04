import { useState } from "react";
import type { FormEvent } from "react";
import { Send } from "lucide-react";
import type { Content } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface ContactProps {
  t: Content;
}

export function Contact({ t }: ContactProps) {
  const c = t.contact;
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="bg-white py-16 sm:py-20" id="contacto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title={c.title} subtitle={c.subtitle} />
        <div className="mx-auto max-w-lg">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-teal/10 bg-white p-6 shadow-lg shadow-teal/5 sm:p-8"
          >
            {sent ? (
              <p
                className="rounded-xl bg-cream px-4 py-6 text-center text-sm font-medium text-teal"
                role="status"
              >
                {c.success}
              </p>
            ) : (
              <div className="space-y-4">
                <Field label={c.name} id="name" type="text" required />
                <Field label={c.email} id="email" type="email" required />
                <Field label={c.company} id="company" type="text" required />
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-teal"
                  >
                    {c.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-xl border border-teal/15 bg-cream/20 px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-slate/60 focus:border-teal focus:ring-2 focus:ring-teal/15"
                  />
                </div>
                <Button type="submit" variant="primary" fullWidth>
                  <Send className="h-4 w-4" />
                  {c.submit}
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type,
  required,
}: {
  label: string;
  id: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-teal">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full rounded-xl border border-teal/15 bg-cream/20 px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-slate/60 focus:border-teal focus:ring-2 focus:ring-teal/15"
      />
    </div>
  );
}
