import React from "react";

const AboutMe = () => {
  return (
    <div className="block-holder">
      <div className="anchor" id="about-me"></div>
      <h1>ABOUT ME</h1>
      <div className="about-row">
        <p>Software engineer, well experienced with C# .NET and Node.js, working with financial services, insurance services, delivery services, logistics services, QCommerce, e-commerce, and integrations for web and desktop solutions.</p>
        <br />
        <p>Currently working in OUTsurance Ireland <img src="https://raw.githubusercontent.com/hjnilsson/country-flags/master/svg/ie.svg" alt="Ireland flag" style={{ width: '16px' }} title="Ireland" />, which is an insurance company in South Africa <img src="https://raw.githubusercontent.com/hjnilsson/country-flags/master/svg/za.svg" alt="South Africa flag" style={{ width: '16px' }} title="South Africa" /> and Australia <img src="https://raw.githubusercontent.com/hjnilsson/country-flags/master/svg/au.svg" alt="Australia flag" style={{ width: '16px' }} title="Australia" />. Based in Dublin, Ireland <img src="https://raw.githubusercontent.com/hjnilsson/country-flags/master/svg/ie.svg" alt="Ireland flag" style={{ width: '16px' }} title="Ireland" /> as a senior software engineer, working with C# (.NET 6/7), Docker, Azure DevOps, Cosmos DB, Terraform, Azure Service Bus, RabbitMQ, and other tools, building the billing and financial services for the Ireland project.</p>
        <br />
        <p>Earlier worked in Talabat <img src="https://raw.githubusercontent.com/hjnilsson/country-flags/master/svg/ae.svg" alt="UAE flag" style={{ width: '16px' }} title="UAE" /> (part of Delivery Hero <img src="https://raw.githubusercontent.com/hjnilsson/country-flags/master/svg/de.svg" alt="Germany flag" style={{ width: '16px' }} title="Germany" />), which is a QCommerce delivery company in MENA, based in Dubai, UAE <img src="https://raw.githubusercontent.com/hjnilsson/country-flags/master/svg/ae.svg" alt="UAE flag" style={{ width: '16px' }} title="UAE" />, as a backend engineer, working with C# (.NET Core/5/6/7), Docker, AWS (SQS, SNS, Lambda, S3, SSM, EC2), Microsoft SQL Server, PostgreSQL, Terraform, ArgoCD, CircleCI and other tools on QCommerce tribe (formerly Grocery tribe) in Shopping Experience (ShopX) squad (formerly Finding and Shopping Team - FAST). Using TDD, DDD &amp; SOLID.</p>
        <br />
        <p>Previously worked at BS2 bank <img src="https://raw.githubusercontent.com/hjnilsson/country-flags/master/svg/br.svg" alt="Brazil flag" style={{ width: '16px' }} title="Brazil" />, for an year and a half. During this period, I participated on two teams (PIX and B2B/enterprises) developing the PIX (Brazilian Instant Payments system), also developing APIs and Open Banking integrations, and contact with B2B clients, regulatory agencies, other banks and technical teams from partners to provide the best solution for both sides! Using C# .NET Core, Microsoft SQL Server, RabbitMQ, supported by DDD architecture, SOLID, DRY &amp; KISS principles.</p>
        <br />
        <p>I am excited to contribute my strengths and proficiency in innovation to your team efforts. As an extroverted and personable communicator with a proven track record in technical writing, my focus on building strong professional relationships has been a valuable asset throughout my career.</p>
        <br />
        <p>In the past, I worked with e-commerce for about eight years. Significant time using VTEX PaaS (Platform as a Service).</p>
        <br />
        <br />
        <p>Work permit (no sponsorship required):</p>
        <ul style={{ listStyleType: 'none' }}>
          <li><img src="https://raw.githubusercontent.com/hjnilsson/country-flags/master/svg/pt.svg" alt="Portugal flag" style={{ width: '16px' }} title="Portugal" /> Portuguese passport - <img src="https://raw.githubusercontent.com/hjnilsson/country-flags/master/svg/eu.svg" alt="European Union flag" style={{ width: '16px' }} title="European Union" /> European Union</li>
          <li><img src="https://raw.githubusercontent.com/hjnilsson/country-flags/master/svg/br.svg" alt="Brazil flag" style={{ width: '16px' }} title="Brazil" /> Brazilian passport - Latin America</li>
        </ul>
        <br />
        <br />
        <div className="responsive-table">
          <table aria-describedby="exp-desc">
            <thead>
              <tr>
                <th colSpan={5} id="exp-desc">Experience (in years)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>14+</strong> C# .NET</td>
                <td><strong>10+</strong> Node.JS (JS/TS)</td>
                <td><strong>18+</strong> PHP</td>
                <td><strong>16+</strong> MS SQL Server</td>
                <td><strong>18+</strong> MySQL/MariaDB</td>
              </tr>
              <tr>
                <td><strong>3+</strong> CosmosDB</td>
                <td><strong>9+</strong> Elastic Search</td>
                <td><strong>10+</strong> Redis</td>
                <td><strong>8+</strong> RabbitMQ</td>
                <td><strong>10+</strong> AWS</td>
              </tr>
              <tr>
                <td><strong>4+</strong> Azure</td>
                <td><strong>6+</strong> Oracle 11g</td>
                <td><strong>18+</strong> JS (Frontend)</td>
                <td><strong>17+</strong> jQuery</td>
                <td><strong>9+</strong> ReactJS</td>
              </tr>
              <tr>
                <td><strong>3+</strong> Terraform</td>
                <td><strong>5+</strong> Rust</td>
                <td><strong>4+</strong> Python</td>
                <td><strong>0+</strong> Vite</td>
                <td><strong>6+</strong> Docker</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <br />
        <p style={{ pageBreakBefore: 'always' }}>
          <b>Check out some projects I worked on:</b>
        </p>
        <ul dir="auto">
          <li>Insurance platform (billing, collections and payments, accounting and actuary)</li>
          <li>Food &amp; Grocery delivery - Shopping Experience &amp; Order Fulfillment</li>
          <li>Western Union integration/RPA for remittance across countries</li>
          <li>Digital wallet (payments, transfers, remittance, balance, statement, mobile top-up, credit card)</li>
          <li>SPI PIX - Brazilian Instant Payments System (Brazil - BACEN)</li>
          <li>Open Banking / Open Finance (Brazil - BACEN)</li>
          <li>Banking as a Service (BaaS) / API Banking</li>
          <li>Internet banking project for B2B customers</li>
          <li>Gateway integrations with MaxiPago, Adyen, PayPal, Pagar.Me, Western Union, and Stripe</li>
          <li>ISO 20022: ADMI, CAMT, PACS, PAIN, REDA messages</li>
          <li>VTEX (e-commerce PaaS), Zendesk (CRM) - integration</li>
          <li>Sankhya / SAP (ERPs) - management, analysis, integration</li>
          <li>Digital video platforms - development</li>
          <li>Subscription learning platform - development</li>
          <li>Database management</li>
          <li>Microservices culture</li>
          <li>Distributed systems using RabbitMQ, Apache Kafka, Azure Service Bus</li>
          <li>Agile methodologies</li>
          <li>Software Development Lifecycle (SDLC)</li>
          <li>General web development</li>
          <li>Open Source Software (OSS) projects in C# .NET, PHP, Rust, and JS/TS, available at <a href="https://github.com/guibranco" target="_blank" rel="noopener">https://github.com/guibranco</a></li>
        </ul>
        <br />
        <br />
        <b>Time coded:</b>
        <br />
        <br />
        <a href="https://wakatime.com/@6be975b7-7258-4475-bc73-9c0fc554430e" target="_blank" rel="noopener">
          <img src="https://wakatime.com/badge/user/6be975b7-7258-4475-bc73-9c0fc554430e.svg?style=for-the-badge" alt="Total time coded since April 10, 2015" />
          <br />
          <br />
          <img src="https://github-readme-stats-git-feature-private-repositories-guibranco.vercel.app//api/wakatime?username=guistracini&range=all_time&layout=compact&theme=synthwave&bg_color=341b3b&hide_title=true" alt="Total time coded since April 10, 2015 by language" />
        </a>
        <p className="sub">* Coding since 2007, but stats available only from April 10, 2015.</p>
      </div>
    </div>
  );
};

export default AboutMe;