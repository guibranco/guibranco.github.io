import React from 'react';

const WorkExperience = () => {
  return (
    <div className="block-holder">
      <div className="anchor" id="work-experience"></div>
      <h2>WORK EXPERIENCE</h2>
      <div className="exp-row">
        <strong className="name">OUTsurance Ireland <img src="https://raw.githubusercontent.com/hjnilsson/country-flags/master/svg/ie.svg" alt="Ireland flag" style={{ width: '16px' }} title="UAE" /> (part of OUTsurance South Africa <img src="https://raw.githubusercontent.com/hjnilsson/country-flags/master/svg/za.svg" alt="South Africa flag" style={{ width: '16px' }} title="South Africa" /> and YouI Australia <img src="https://raw.githubusercontent.com/hjnilsson/country-flags/master/svg/au.svg" alt="Australia flag" style={{ width: '16px' }} title="Australia" />)
          <br />
          <span>(insurance services | +5000 employees)</span>
        </strong>
        <span className="year">April/2023 - Now</span>
        <span className="job">Senior Software Engineer / .NET Developer</span>
        <p>Working in Finance & Billing project</p>
        <ul>
          <li>Develop billing, collections, and payments schedule system</li>
          <li>Develop of shadow ledger system</li>
          <li>ISO 20022: PAIN (Payments Initiation) messages</li>
          <li>Integration with policy administration portal</li>
          <li>Integration with payment gateways and banks (credit card and direct debit payments)</li>
          <li>Saga pattern using NServiceBus, Azure Service Bus, RabbitMQ, and CosmosDB</li>
          <li>Building APIs and services with C# .NET 7, CosmosDB, Container App, Container App Job</li>
          <li>Setup infrastructure with IaC using Terraform</li>
          <li>Agile culture & ceremonies using Scrum and Kanban over Jira and Azure DevOps</li>
        </ul>
      </div>
      {/* Add other work experience entries similarly */}
    </div>
  );
};

export default WorkExperience;