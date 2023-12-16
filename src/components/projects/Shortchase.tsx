
import Layout from './Layout'

type Prop = {
  url: string;
}
export default function Shortchase({url}: Prop) {
  const description = <p>
Shortchase is a social micro-bloging peer-to-peer betting platform for making any kind of custom wager.
Users can;
<ul>
  <li> - Make wagers and invite others to bet for or against </li>
  <li> - Create a giveaway for other users</li>
  <li>- Sell their own betting signals</li>
  <li>-  See results of their wager, and be rewarded for it, which is withdrawable.</li> 
  etc.
</ul>
    </p>
  return (
    <Layout title={'Shortchase'} description={description} link={url} />
  )
}
