import { IntroFlag } from "./IntroFlag";

const Introduction = () => {
  return (
    <>
      <p>
        Senior, hands-on software engineer with strong expertise in C#/.NET, focused on designing,
        building, and maintaining scalable backend systems. Experienced across financial services,
        insurance, logistics, delivery platforms, quick commerce (QCommerce), e-commerce, and
        complex integrations for web and desktop solutions.
      </p>

      <br />

      <p>
        Currently based in <IntroFlag company="Dublin, Ireland" code="ie" />, working as a senior
        software engineer at <IntroFlag company="OUTsurance Ireland" code="ie" />, part of the
        OUTsurance group with operations in South Africa{" "}
        <IntroFlag company="OUTsurance" code="za" /> and Australia{" "}
        <IntroFlag company="Youi" code="au" />. I work hands-on building billing, financial, and
        renewals (rerates) systems for the Irish market using C# (.NET 6 to 10), Docker, Azure
        DevOps, Cosmos DB, Terraform, Azure Service Bus, RabbitMQ, and supporting Azure services.
        The platform includes ISO 20022-based financial integrations, including SEPA Direct Debit
        flows using PAIN.001, PAIN.002, and PAIN.008 messages.
      </p>

      <br />

      <p>
        Previously worked as a backend engineer at <IntroFlag company="Talabat" code="ae" /> (part
        of <IntroFlag company="Delivery Hero" code="de" />
        ), a large-scale QCommerce delivery platform operating across MENA, based in{" "}
        <IntroFlag company="Dubai, UAE" code="ae" />. I was part of the QCommerce domain within the
        Shopping Experience (ShopX) squad, developing high-throughput backend services using C#
        (.NET Core/5/6/7), Docker, AWS (SQS, SNS, Lambda, S3, SSM, EC2), Microsoft SQL Server,
        PostgreSQL, Terraform, ArgoCD, and CircleCI. Strong focus on TDD, DDD, and SOLID principles.
      </p>

      <br />

      <p>
        Earlier in my career, I worked at <IntroFlag company="BS2 Bank" code="br" /> for
        approximately one and a half years, contributing to both the PIX and B2B/Enterprise teams. I
        worked directly on Brazil’s Instant Payments ecosystem, developing systems that integrate
        with the SPI (Sistema de Pagamentos Instantâneos), the core infrastructure behind PIX. This
        included handling ISO 20022 financial messages, building APIs, and implementing Open Banking
        integrations. The solutions were built using C# .NET Core, Microsoft SQL Server, RabbitMQ,
        and a DDD-based architecture guided by SOLID, DRY, and KISS principles.
      </p>

      <br />

      <p>
        Strongly hands-on and production-oriented, I enjoy working close to the code, distributed
        systems, and real business problems. I value clean architecture, observability, and
        pragmatic engineering decisions, and actively contribute through clear technical
        documentation and effective cross-team collaboration.
      </p>

      <br />

      <p>
        I also bring over eight years of experience in the e-commerce domain, working with
        high-traffic and enterprise-grade platforms. This includes projects for{" "}
        <IntroFlag company="Farfetch" code="pt" />, contributing to internal platform-level systems,
        as well as <IntroFlag company="C&A Brasil" code="br" /> and{" "}
        <IntroFlag company="Inovação Media Brasil" code="br" />, where I worked extensively with the
        VTEX platform (PaaS). My experience spans order management, catalog and pricing
        integrations, checkout flows, third-party integrations, and supporting scalable,
        high-availability production environments.
      </p>
    </>
  );
};

export default Introduction;
