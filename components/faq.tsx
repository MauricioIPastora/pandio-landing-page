import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";


export function FAQ() {
    return (
        <div className="flex flex-col items-center justify-center h-screen relative z-10">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-5xl text-center">
                <strong>FAQ</strong>
            </h1>
            <Accordion type="single" collapsible className="w-full max-w-2xl mt-10">
                <AccordionItem value="item-1" className="border-b-2 border-foreground cursor-pointer bg-foreground/50 backdrop-blur-sm rounded-2xl">
                    <AccordionTrigger className="p-2">What platforms is Pandio available on?</AccordionTrigger>
                    <AccordionContent className="p-2">
                        Pandio is currently available on the following platforms:
                        <ul>
                            <li>Windows</li>
                            <li>Mac</li>
                            <li>Linux</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}