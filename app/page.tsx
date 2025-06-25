// app/page.tsx
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/ziiflicks'); // or '/ziiposts' or any route you want as homepage
}
