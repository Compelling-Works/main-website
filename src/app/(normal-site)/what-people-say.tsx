import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function WhatPeopleSay() {
  const reviews = [
    {
      name: "Pixy Dusty",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat iure vero nemo, qui natus sint aut quam nisi quisquam iste praesentium ut minus officia? Eos explicabo aspernatur ipsam perferendis.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat iure vero nemo, qui natus sint aut quam nisi quisquam iste praesentium ut minus officia? Eos explicabo aspernatur ipsam perferendis.",
    },
    {
      name: "John Doe",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat iure vero nemo, qui natus sint aut quam nisi quisquam iste praesentium ut minus officia? Eos explicabo aspernatur ipsam perferendis.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat iure vero nemo, qui natus sint aut quam nisi quisquam iste praesentium ut minus officia? Eos explicabo aspernatur ipsam perferendis.",
    },
    ,
    {
      name: "Jane Doe",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat iure vero nemo, qui natus sint aut quam nisi quisquam iste praesentium ut minus officia? Eos explicabo aspernatur ipsam perferendis.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat iure vero nemo, qui natus sint aut quam nisi quisquam iste praesentium ut minus officia? Eos explicabo aspernatur ipsam perferendis.",
    },
  ];
  return (
    <section className=" bg-gray-50 text-center  py-10 px-8">
      <div className="container">
        <h4 className="md:text-2xl font-semibold mb-3">What people say</h4>

        <Carousel className="mx-6">
          <CarouselContent>
            {reviews?.map((review, index) => (
              <CarouselItem key={index}>
                <p className="text-sm">{review?.content}</p>
                <h5 className="text-md text-blue-800">{review?.name}</h5>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-blue-800 text-white" />
          <CarouselNext className="bg-blue-800 text-white" />
        </Carousel>
      </div>
    </section>
  );
}
