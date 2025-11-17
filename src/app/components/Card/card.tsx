import { cn } from "../../../utils";

function Card({ className, children }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "rounded-lg border shadow-sm h-full p-3 border-gray-200/50",
        className
      )}
      //   {...props}
    >
      {children}
    </div>
  );
}

function CardTitle({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "rounded-lg border shadow-sm h-full p-3 border-gray-200/50",
        className
      )}
      >
        <div className="space-y-2">
            <div className="flex flex-col">
                <div className="font-bold text-lg">{props.title}</div>
                <div className="text-sm">{props.about}</div>
            </div>
            {children}
        </div>
      </div>
  );
}

export { Card, CardTitle };
