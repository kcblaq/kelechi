
import Layout from './Layout'

type Prop = {
  url: string;
}
export default function Kejepay({url}:Prop) {
    const desc = <p>
      Kejepay is an escrow platform with the aim of managing trust online for varous kinds of transactions.
      It has advanced features of API integration into other websites, as well as generating links for buyers or sellers of goods and services to create a ticket for the transaction. At the end of the successful transaction, money is remitted to the seller by the buyer's confirmation.
    </p>
  return (
    <Layout title={'Kejepay'} description={desc} link={url} />
  )
}
