import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
  Divider,
  Input,
  Image,
} from "@nextui-org/react";

export default function Cards(props) {
  return (
    <>
      <div>
        <Card>
          <div className="mx-auto">
            <CardHeader className="font-montserrat text-xl font-bold">{props.tech}</CardHeader>
          </div>
          <Divider />
          <CardBody>
            <div className="">
              <Image src={props.image} className="w-[300px] object-cover" />
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
