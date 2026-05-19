# build stage 
FROM golang:alpine AS builder

WORKDIR /app 

COPY main.go .

RUN CGO_ENABLED=0 GOOS=linux go build -o server main.go


# run stage 
FROM scratch

WORKDIR /app

COPY --from=builder /app/server .

EXPOSE 8080

ENV PORT=8080

CMD ["./server"]
