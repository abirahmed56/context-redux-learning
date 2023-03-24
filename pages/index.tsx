import Cart from "@/components/Cart";
import DecInc from "@/components/DecInc"
import store from "@/store"
import Link from "next/link";
import { Provider } from "react-redux"

export default function Home() {
  store.subscribe(()=> console.log(store.getState()));
  return (
    <>
    
    <Provider store={store}>
      <Cart />
      <DecInc />
    </Provider>
    <div className="navigator">
      <Link href='/taskPage'>  Task </Link>
    </div>
    </>
  )
}
