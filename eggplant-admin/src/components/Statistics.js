import React, { useState, useEffect } from 'react';
import PostingService from '../services/PostingService';
import { ResponsiveLine } from '@nivo/line'
const Statistics = () => {

    const data =
    [
      {
        "id": "문의 수",
        "color": "hsl(3, 70%, 50%)",
        "data": [
          {
            "x": "7일전",
            "y": 227
          },
          {
            "x": "6일전",
            "y": 62
          },
          {
            "x": "5일전",
            "y": 75
          },
          {
            "x": "4일전",
            "y": 154
          },
          {
            "x": "3일전",
            "y": 281
          },
          {
            "x": "2일전",
            "y": 32
          },
          {
            "x": "1일전",
            "y": 18
          },
          {
            "x": "오늘",
            "y": 287
          }       ]
      },
      {
        "id": "신고수",
        "color": "hsl(110, 70%, 50%)",
        "data": [
          {
            "x": "7일전",
            "y": 263
          },
          {
            "x": "6일전",
            "y": 6
          },
          {
            "x": "5일전",
            "y": 101
          },
          {
            "x": "4일전",
            "y": 238
          },
          {
            "x": "3일전",
            "y": 248
          },
          {
            "x": "2일전",
            "y": 134
          },
          {
            "x": "1일전",
            "y": 172
          },
          {
            "x": "오늘",
            "y": 41
          }
        ]
      },
      {
        "id": "등록수",
        "color": "hsl(115, 70%, 50%)",
        "data": [
          {
            "x": "7일전",
            "y": 236
          },
          {
            "x": "6일전",
            "y": 158
          },
          {
            "x": "5일전",
            "y": 203
          },
          {
            "x": "4일전",
            "y": 50
          },
          {
            "x": "3일전",
            "y": 215
          },
          {
            "x": "2일전",
            "y": 62
          },
          {
            "x": "1일전",
            "y": 94
          },
          {
            "x": "오늘",
            "y": 236
          }
        ]
      },
      {
        "id": "거래수",
        "color": "hsl(110, 70%, 50%)",
        "data": [
          {
            "x": "7일전",
            "y": 250
          },
          {
            "x": "6일전",
            "y": 75
          },
          {
            "x": "5일전",
            "y": 210
          },
          {
            "x": "4일전",
            "y": 161
          },
          {
            "x": "3일전",
            "y": 117
          },
          {
            "x": "2일전",
            "y": 74
          },
          {
            "x": "1일전",
            "y": 171
          },
          {
            "x": "오늘",
            "y": 61
          }
        ]
      },
      {
        "id": "방문수",
        "color": "hsl(286, 70%, 50%)",
        "data": [
          {
            "x": "7일전",
            "y": 139
          },
          {
            "x": "6일전",
            "y": 160
          },
          {
            "x": "5일전",
            "y": 80
          },
          {
            "x": "4일전",
            "y": 241
          },
          {
            "x": "3일전",
            "y": 52
          },
          {
            "x": "2일전",
            "y": 72
          },
          {
            "x": "1일전",
            "y": 255
          },
          {
            "x": "오늘",
            "y": 31
          }
        ]
      }
    ]

    return(
    <div className="stat">
            <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'pink_yellowGreen' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />

    </div>
    )
}

export default Statistics;