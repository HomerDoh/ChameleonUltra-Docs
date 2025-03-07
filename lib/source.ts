import { docs } from "@/.source";
import { i18n } from "@/lib/i18n";
import { loader } from "fumadocs-core/source";

export const source = loader({
  i18n,
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
});
