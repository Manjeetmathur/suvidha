import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';

const ReadMore = () => {
       const blogs = [
              {
                     id: '1',
                     title: "Comprehensive Guide to NRI Status: Eligibility, Benefits, and Taxation in India",
                     description: <p>
                            <b> <br />Definition of NRI :-  <br /> </b>
                            NRI stands for Non-Resident Indian. It refers to an Indian citizen who resides outside of India for work, education, or other purposes. NRIs retain their Indian citizenship but are physically present outside India for extended periods. An individual's status as an NRI has significant implications, particularly when it comes to taxation, investments, and other legal considerations in India.
                            Qualifying as an NRI
                            There are two main ways to qualify as an NRI:
                            Physically Staying Outside India
                            To be classified as an NRI, an Indian citizen must have spent less than 182 days in India in the previous financial year (April 1 to March 31). This is the most common way to establish NRI status.
                            Intention to Stay Outside India
                            Even if you spend more than 182 days in India, you may still be considered an NRI if you have a clear intention to live outside the country for an extended or indefinite period. Factors such as having a job, business, or property abroad can help demonstrate this intention.

                     </p>
              },
              {
                     id: '2',
                     title: "Different Categories of NRIs",
                     description: <p>
                            <b>NRIs Working Abroad <br /> </b>
                            Many Indian citizens work abroad for a variety of reasons, including employment with multinational companies, studying at foreign universities, or running international businesses. These individuals fall under the NRI category and enjoy various benefits in terms of taxation, investments, and repatriation of funds.
                            Indian Professionals in Global Organizations
                            Professionals who work with global institutions like the World Bank, WHO, IMF, or the UN and live outside India are also classified as NRIs. This category encompasses those who represent India on the international stage, often in high-profile positions.
                            <b>   <br /><br /> Government and Public Sector Employees Abroad  <br /> </b>

                            Indian government employees and public sector workers posted overseas for diplomatic, trade, or defense missions qualify as NRIs. These individuals maintain their connection to India through public service but are physically located abroad for long periods.
                     </p>,
              },
              {
                     id: '3',
                     title: <p>Eligibility Criteria for NRI Status in India</p>,
                     description: <p><b> <br />Duration of Stay :-  <br /> </b>
                            The primary criterion for NRI status is the amount of time an individual spends outside India during a financial year. To be classified as an NRI, an individual must reside outside India for at least 183 days. Indian citizens who are present in India for less than 60 days in a financial year or have spent less than 365 days in the past four years are also considered NRIs.
                            Special Considerations for Crew Members and PIOs
                            Indian citizens or persons of Indian origin (PIOs) who work as crew members of Indian ships are subject to special rules. Even if they spend more than 182 days in India as crew members, they may still qualify as NRIs if their income and primary residence are outside India.
                            <b> <br />   RNOR Status for High Earners  <br /> </b>
                            Individuals earning more than ₹15 lakh from sources within India (excluding foreign income) and spending more than 182 days abroad may qualify as RNOR (Resident but Not Ordinarily Resident). This status carries unique tax implications for high earners.
                     </p>,
              }, {
                     id: '4',
                     title: <p>Tax Benefits for NRIs</p>,
                     description: <p> <b> <br />  Basic Exemptions   <br /> </b>
                            NRIs can avail of the basic tax exemptions similar to residents, but only on income earned or accrued in India. Under the old tax regime, the basic exemption limit is ₹2,50,000, while under the new tax regime, it is ₹3,00,000. However, income from capital gains is generally not covered by this exemption.
                            <b> <br />  Double Taxation Avoidance Agreement (DTAA)   <br /> </b>
                            India has signed Double Taxation Avoidance Agreements (DTAA) with many countries, including the UK, USA, Canada, and Australia. Under DTAA, NRIs can avoid being taxed twice on the same income in India and their country of residence. The DTAA allows them to either claim credit for the tax paid in the other country or get an exemption altogether.
                            <b> <br />     Tax-Free Interest on NRE and FCNR Accounts   <br /> </b>
                            NRIs can open a Non-Resident External (NRE) account or a Foreign Currency Non-Resident (FCNR) account in India. The interest earned on these accounts is completely tax-free, providing a significant benefit. Additionally, the principal and interest in NRE accounts are fully repatriable, offering flexibility in managing their funds.
                            <b> <br />    Life Insurance Premium Deductions under Section 80C<br /> </b>
                            NRIs can claim deductions for life insurance premiums under Section 80C of the Income Tax Act, up to ₹1.5 lakh per year. Moreover, the maturity proceeds or death benefits from such policies are not taxable, providing both financial security and tax relief.
                            <b> <br /> Section 80D Deductions for Health Insurance   <br /> </b>
                            NRIs can claim deductions for health insurance premiums paid for themselves, their families, or their parents under Section 80D. This deduction can be claimed up to ₹25,000 per year for individuals below 60 years, and ₹50,000 for senior citizens.
                            <b> <br />   Section 80E for Education Loan Interest    <br /> </b>
                            NRIs are eligible to claim tax deductions on the interest paid on education loans taken for themselves, their spouse, or children under Section 80E. This benefit can be claimed for up to 8 years or until the loan is fully repaid.
                            <b> <br />   Section 80G for Charitable Donations<br /> </b>
                            Donations made to eligible charitable organizations can be claimed as a deduction under Section 80G. NRIs can reduce their taxable income in India by contributing to recognized non-profit entities.
                     </p>,
              },
              {
                     id: '5',
                     title: <p>Disadvantages of Being an NRI</p>,
                     description: <p>  <b> <br />Limited Access to Some Investment Schemes <br /> </b>
                            NRIs are not allowed to invest in certain Indian investment schemes like the Public Provident Fund (PPF) and National Savings Certificate (NSC) after acquiring NRI status. However, they can continue with any existing investments made before attaining NRI status until the schemes mature. This limitation restricts some of the more popular investment opportunities available to resident Indians.
                            <b> <br />Complex Regulatory Compliance <br /> </b>
                            Navigating the regulatory and tax requirements for both India and their country of residence can be complicated for NRIs. Filing tax returns in two countries, understanding the implications of DTAA, and managing dual residency status often require professional assistance, adding to the cost and complexity of compliance.
                            <b> <br />Currency Risk <br /> </b>
                            NRIs frequently deal with fluctuations in exchange rates, which can affect the value of their remittances and investments in India. Depreciation of the Indian Rupee against their home country’s currency can lead to losses when repatriating funds.
                            <b> <br /> Limited Banking Services <br /> </b>
                            NRIs face certain restrictions when it comes to banking services in India. For example, NRIs cannot open regular savings accounts and must use special accounts like NRE, NRO, or FCNR accounts. Additionally, certain government schemes are off-limits for NRIs, limiting their access to attractive savings instruments.

                     </p>,
              },
              {
                     id: '6',
                     title: <p>Benefits of Being an NRI </p>,
                     description: <p>   <b> <br /> Tax-Free Interest on NRE Accounts <br /> </b>
                            NRIs can open Non-Resident External (NRE) accounts in India, where the interest earned is entirely tax-free. The principal and interest in these accounts can also be fully repatriated, meaning that NRIs can transfer the money back to their country of residence without any restrictions. This makes NRE accounts an attractive option for parking savings with tax-free returns.
                            <b> <br /> Double Taxation Avoidance  <br /> </b>
                            India has signed Double Taxation Avoidance Agreements (DTAA) with several countries, including the USA, UK, Canada, Australia, and many European nations. These agreements ensure that NRIs are not taxed twice on the same income in both India and their country of residence. Depending on the treaty, NRIs can either claim credit for taxes paid in India or get an exemption in their home country, helping them reduce their overall tax burden.
                            <b> <br /> Investment Opportunities in India  <br /> </b>
                            NRIs have access to a broad range of investment opportunities in India. These include mutual funds, real estate, stocks, and government bonds, many of which offer higher returns compared to similar investments in other countries. NRIs can invest in Indian financial markets through special schemes such as the Portfolio Investment Scheme (PIS), providing the opportunity to diversify their portfolios and take advantage of the growing Indian economy.
                            <b> <br /> Property Ownership in India <br /> </b>
                            NRIs are allowed to purchase property in India, excluding agricultural land, farmhouses, and plantations. They can invest in residential and commercial properties, either as an investment or for personal use. This provides a valuable opportunity to own assets in their home country, which can also generate rental income.
                            Repatriation of Funds NRIs can freely repatriate funds from India to their country of residence. This includes money earned through investments in India, such as rental income, dividends, and interest. This flexibility allows NRIs to manage their finances between India and their country of residence with ease.
                            <b> <br />  Special Investment Schemes  <br /> </b>
                            NRIs are eligible to invest in unique schemes like the Non-Resident External (NRE) and Non-Resident Ordinary (NRO) accounts. These accounts offer a range of benefits, such as tax-free interest on NRE accounts and the ability to manage Indian income and investments separately through NRO accounts.
                            <b> <br /> Favorable Tax Exemptions   <br /> </b>
                            In addition to tax-free interest on NRE accounts, NRIs enjoy several other tax exemptions and deductions. They can claim tax deductions under Section 80C for investments in life insurance, tax-saving fixed deposits, and repayment of home loans. They can also take advantage of exemptions on long-term capital gains by investing in specified assets like bonds under Section 54EC.
                     </p>,
              },
              {
                     id: '7',
                     title: <p>Qualifying as an NRI </p>,
                     description: <p>
                            <b> <br />There are two main ways to qualify as an NRI:   <br /> </b>
                            <b> <br />   Physically Staying Outside India  <br /> </b>
                            To be classified as an NRI, an Indian citizen must have spent less than 182 days in India in the previous financial year (April 1 to March 31). This is the most common way to establish NRI status.
                            <b> <br />  Intention to Stay Outside India   <br /> </b>
                            Even if you spend more than 182 days in India, you may still be considered an NRI if you have a clear intention to live outside the country for an extended or indefinite period. Factors such as having a job, business, or property abroad can help demonstrate this intention
                     </p>,
              },
              {
                     id: '8',
                     title: <p>Why Suvidha? </p>,
                     description: <p>
                            <b> <br />   Tailored for NRIs:  <br /> </b>
                            : Suvidha is designed specifically for the global Indian diaspora, addressing the complexities of cross-border investments, taxes, and financial regulations. We provide solutions that cater to your unique needs.
                            <b> <br />  Simplified Investments: <br /> </b>
                            Whether it’s navigating the Indian stock market, real estate, or other investment opportunities, Suvidha offers clear, easy-to-understand options. We take the complexity out of the process so you can invest with confidence.
                            <b> <br /> Expert Insights & Tools  <br /> </b>
                            Stay on top of market trends, tax changes, and investment opportunities with our platform’s expert insights and intuitive tools. Our goal is to help you grow your wealth efficiently.
                            <b> <br />  Seamless Experience<br /> </b>
                            We prioritize making your financial management smooth and hassle-free. Our platform is built to be user-friendly, secure, and accessible from anywhere in the world.

                     </p>
              },
              {
                     id: '9',
                     title: <p>What If Suvidha Went Bankrupt? </p>,
                     description: <p>
                            <b> <br />  1. Your Investments and Money Stay Safe: <br /> </b>

                            At Suvidha, your investments and financial assets are held securely with regulated financial institutions (such as banks, brokers, or custodians) and not directly with us. Even in the unlikely event that Suvidha faces financial difficulties, your assets are protected and remain with the financial institutions we partner with.
                           
                            <b> <br />   2. Regulatory Protections: <br /> </b>
                            We work with partners and custodians that are fully regulated by relevant authorities, such as SEBI (Securities and Exchange Board of India) or RBI (Reserve Bank of India). These institutions are bound by strict regulations designed to protect your investments.

                     </p>
              },

       ];
       const _id = useParams()
       // console.log((_id.id));
       const blog = blogs.filter((item) => {
              // console.log(item.id )
              return item.id === _id.id
       })
       // console.log(blog)
       return (
              <div>
                     <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
                            <div className="p-6">
                                   <h2 className="text-lg font-bold text-blue-500 mb-2">{blog[0]?.title}</h2>
                                   <div className="text-gray-700 text-base">{blog[0]?.description}</div>
                            </div>
                     </div>
                     <div className="flex justify-center">
                            <Link to={'/blog'} className="bg-blue-500 text-white font-semibold py-2 px-4 md:py-3 md:px-5
             rounded-lg shadow-xl hover:bg-blue-600 hover:text-white 
              transition duration-300 ease-in-out my-5  md:mt-10 flex items-center gap-1">
                                   <BiArrowBack /> Back
                            </Link>
                     </div>
              </div>
       )
}

export default ReadMore
