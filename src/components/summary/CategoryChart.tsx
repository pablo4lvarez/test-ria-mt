"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CategorySummary } from "@/lib/services/products"

const chartConfig = {
  count: {
    label: "Products",
    color: "var(--chart-1)",
  },
  averagePrice: {
    label: "Avg Price",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function CategoryChart({ data }: { data: CategorySummary[] }) {
  return (
    <ChartContainer config={chartConfig} className="min-h-[450px] w-full">
      <BarChart accessibilityLayer data={data} margin={{ bottom: 20 }}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="name"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          angle={-90}
          textAnchor="end"
          height={150}
          interval={0}
        />
        <YAxis
          label={{
            value: "Product Count",
            angle: -90,
            position: "insideLeft",
            style: { textAnchor: "middle" },
          }}
        />
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              formatter={(value, name, item) => (
                <>
                  <div className="flex items-center gap-2">
                    <div
                      className="h-2.5 w-2.5 rounded-[2px]"
                      style={{ backgroundColor: "var(--color-count)" }}
                    />
                    <span className="text-muted-foreground">Count:</span>
                    <span className="font-medium text-foreground">{value}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="h-2.5 w-2.5 rounded-[2px]"
                      style={{ backgroundColor: "var(--color-averagePrice)" }}
                    />
                    <span className="text-muted-foreground">Avg Price:</span>
                    <span className="font-medium text-foreground">${item.payload.averagePrice}</span>
                  </div>
                </>
              )}
            />
          }
        />
        <Bar dataKey="count" fill="var(--color-count)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}

