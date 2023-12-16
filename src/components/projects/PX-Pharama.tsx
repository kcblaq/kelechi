import Layout from './Layout'

export default function PXPharama() {
    const description = <p>
        An educative and prescriptive e-commerce that brings patients and medical practioners together,
        with three user types; 
        <ul>
            <li>Patient as the customer</li>
            <li>Pharmacy stores, and</li>
            <li>Admin</li>
        </ul>
        Customer searches for drug, reads the prescription, side effect and other relevant information, and choose to buy through the platform.
    </p>
  return (
    <Layout title={'PX-Pharma'} description={description} />
  )
}
