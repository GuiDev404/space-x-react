import { format } from "date-fns";
import { es } from "date-fns/locale";

export function formatDate(date, formatStr) {
  return format(date, formatStr, { locale: es });
}