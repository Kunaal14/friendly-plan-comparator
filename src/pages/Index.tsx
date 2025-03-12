
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CountdownTimer } from "@/components/CountdownTimer";
import { CheckCircle2, XCircle, ChevronDown, ChevronUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const Features = [
  {
    name: "Reply Agent",
    individual: { included: true, details: "1 agent, 60 replies/day" },
    basic: { included: true, details: "1 agent, 100 replies/day" },
    growth: { included: true, details: "3 agents, 100 replies/day" },
  },
  {
    name: "Mention Agent",
    individual: { included: true, details: "1 agent, 50 mentions/day" },
    basic: { included: true, details: "1 agent, 100 mentions/day" },
    growth: { included: true, details: "2 agents, 100 mentions/day" },
  },
  {
    name: "Raid Agent",
    individual: { included: true, details: "Up to 1000 members" },
    basic: { included: true, details: "No limit" },
    growth: { included: true, details: "No cap" },
  },
  {
    name: "Auto Engagement",
    individual: { included: false },
    basic: { included: true, details: "10 agents" },
    growth: { included: true, details: "15 agents" },
  },
  {
    name: "Account Manager",
    individual: { included: false },
    basic: { included: true, details: "Not dedicated" },
    growth: { included: true, details: "Dedicated" },
  },
  {
    name: "Analytics Access",
    individual: { included: false },
    basic: { included: false },
    growth: { included: true },
  },
];

const FAQs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for business accounts.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    question: "What happens after the trial period?",
    answer: "After the trial period ends, you'll be automatically switched to the selected plan unless you cancel.",
  },
];

export default function Index() {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const visibleFeatures = showAllFeatures ? Features : Features.slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-hover">
            Choose Your Plan
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unlock powerful tools for your community with our flexible pricing options
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Individual Plan */}
          <div className="relative p-8 rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-lg animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Individual</h2>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-price-highlight">$400<span className="text-lg text-price-muted">/month</span></p>
                <p className="text-sm text-gray-500">or $900/quarter (Save 25%)</p>
              </div>
              <p className="text-sm text-gray-600">Perfect for solo creators</p>
              <Button className="w-full bg-primary hover:bg-primary-hover">Get Started</Button>
            </div>
          </div>

          {/* Basic Plan */}
          <div className="relative p-8 rounded-2xl border-2 border-primary bg-white shadow-lg transform transition-all duration-200 hover:scale-105 animate-fade-in">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">Most Popular</Badge>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Basic</h2>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-price-highlight">$1,000<span className="text-lg text-price-muted">/month</span></p>
                <p className="text-sm text-primary font-medium">Special offer: $2,000/quarter</p>
                <div className="mt-2">
                  <CountdownTimer />
                </div>
              </div>
              <p className="text-sm text-gray-600">Best for growing communities</p>
              <Button className="w-full bg-primary hover:bg-primary-hover">Get Started</Button>
            </div>
          </div>

          {/* Growth Plan */}
          <div className="relative p-8 rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-lg animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Growth</h2>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-price-highlight">$5,000<span className="text-lg text-price-muted">/3 months</span></p>
                <p className="text-sm text-gray-500">10-day trial for $500</p>
              </div>
              <p className="text-sm text-gray-600">For established communities</p>
              <Button className="w-full bg-primary hover:bg-primary-hover">Get Started</Button>
            </div>
          </div>
        </div>

        {/* Features Comparison */}
        <div className="overflow-x-auto mb-16">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-4">Features</th>
                <th className="text-center py-4 px-4">Individual</th>
                <th className="text-center py-4 px-4">Basic</th>
                <th className="text-center py-4 px-4">Growth</th>
              </tr>
            </thead>
            <tbody>
              {visibleFeatures.map((feature, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4">{feature.name}</td>
                  <td className="text-center py-4 px-4">
                    {feature.individual.included ? (
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="text-success w-5 h-5" />
                        {feature.individual.details && (
                          <span className="text-xs text-gray-500 mt-1">{feature.individual.details}</span>
                        )}
                      </div>
                    ) : (
                      <XCircle className="text-error w-5 h-5 mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {feature.basic.included ? (
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="text-success w-5 h-5" />
                        {feature.basic.details && (
                          <span className="text-xs text-gray-500 mt-1">{feature.basic.details}</span>
                        )}
                      </div>
                    ) : (
                      <XCircle className="text-error w-5 h-5 mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {feature.growth.included ? (
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="text-success w-5 h-5" />
                        {feature.growth.details && (
                          <span className="text-xs text-gray-500 mt-1">{feature.growth.details}</span>
                        )}
                      </div>
                    ) : (
                      <XCircle className="text-error w-5 h-5 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Button
            variant="ghost"
            className="mt-4 mx-auto flex items-center gap-2"
            onClick={() => setShowAllFeatures(!showAllFeatures)}
          >
            {showAllFeatures ? (
              <>
                Show Less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Show More Features <ChevronDown className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>

        {/* FAQ Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            {FAQs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Footer */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">Need a custom plan for your enterprise?</p>
          <Button variant="outline">Contact Sales</Button>
        </div>
      </div>
    </div>
  );
}
