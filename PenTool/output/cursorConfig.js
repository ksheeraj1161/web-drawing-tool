/**
 * author Siwei
 * 鼠标手势、鼠标位置
 */
const cursorConfig = {
    normal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAABIdJREFUSA3tVWsspFcY/uaW0dgiOqQimQ3iPmkQtyIShlWEbK0uUlGXdkkbTRBtGlIlQmls2B/qkobBH2JIMFHpBE0YGWwRxqWWBl1WMmu2SnXMfDN9zrQz2c5mN4bd/upJTs533vNevue9UnK5/Obk5GTb8fGxB/VfrIGBgZH4+Hh9dXW1cmxsbHR7e/vGq7TLEIvFEq1WK9RoNFqFQvHn7u6uVUpKypK3t3cPdjuDwdC+zB9gEmVWVlbHg4ODzOTk5J8KCgokGxsbzqWlpfe6urruz8/Pf63X621emlGCsKmpaWtiYuKH7OzsJ+vr66kwwENs77W1tSngbrqhoeHB1NSUCPTrVzXMhsv0REloaGje3Nzcj0D0paen5/chISGfwgCXnECc2tjY+N7w8PANqVQ67+bmVu3i4iK/lHGSNAQhEV5YWCiDW9UymayLGMNmG5VubW3dGhkZkWZlZT3u7+9fNdItPU0KiaCfn19NcXFxIpTfnpmZEep0Oo1EIvk5KCjoY0dHRzFYxENDQ8PIZIGlhoz8hqQxXoh7z8/POUggtqur60N3d3cFPOA3Pj4+CLS2hA8njYxmPI3eKH+R04iQQZiVSmVIUVGRd0lJyUB4ePhtQltZWfm8rKys2sPDoxjXChaLRavVavKjHGyLS+ZfCE9PT/knJyfWNjY2poTw9fX9zsvLS3l0dOQKAxSTydShbo0GCcmixTRmKZHi8/kzQPIIKwkuIwio5eXlPGyera3tQ3InCOH2Sxs0uBRGiS4K56/T09OjdXV17+/s7Mz29PQc19bWCtLS0jYDAwO/ITwE4T8uNYaDkC+8DC4FGpIE1kQqLCwsr7y8/C6bzdaiob+RmZkpi4mJeRc/85i8wyANl7IODg7eRl0OtbS0KJaWlj4kbxdZbCcnJ1VzczOfw+Hcn52dlUKoIjg4+AucZD+zuFwuBbTXampqRCqVyprH47HQhZoWFxdZKKvWZwTMCEx0ko/Quirs7Oz+qKqqyq+vr5+Hgm4g5pvxUug4Cfv7++90dnZyfXx8Xj88PGShZCgkFhcyn0GGZy5jfv87eKCCmbW2tnZndXX1g97e3rdQg09iY2PlUPwViv4XxLa5vb092d7e/jW0PnZlZSUF1xr0ZWRkUGgGNMqpPyoqKt3cyNN3U+ARIxoP35IN4VQY/kQkEkX7+/sLYYTC5LBOTExk9vX1UUgmkw60Qgpu1W1ubuppmlabHp7zYUJo/g7EtkA1jPiGCQQC5tnZGaO1tZV4wsCK2FM5OTkUXEpHRkbuC4XCxoCAgLvmeszvzzWIRi1DUw9OSEhgdXd3U3t7eybZ9PR0Cs1Bh4GtKSwsHI+Ojs6Fhx6ZGCz9AIrr+fn556hBvYODg2kje/UYU/q4uDgayB/AYK6luk0xNBP8zdnZWYlafBN0BmqPwliiMD10GMxq1KkkIiLiDlCpzOQuf8VMFCUlJWlQMgZUKH66o6MDibx26/JaXyAJt15D7JbReXS5ubm/4wc6QTN0oxeIXe0JoykOyTOKgRxzNU3/S79CD/wF1bAnj93p/FEAAAAASUVORK5CYII=",
    add: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAABUlJREFUSA29VnkspVcU/96ijxrrvFKVUPveILYiGoxJkUqrOihRW6cyTRpLtYpUiaU0JswfxpImtkSIJbFEZayJJZYpYqfMoMOQZxljGct7+ruv/V4673UmGNOb3Nx3zz3n/L7fueec+6j+/v6POzs7C3d2dvSp/2PU1tY2uru7n6ampvJaWlqaFxYWrr9OXEZNTU3TycmJ6/Hx8cnExMSzpaUlaW9v71EjI6NyzCIGg3FymR/AJM6kpaV36urqmF5eXr9HREQ0zczMqMfGxt4pLS29PzQ09PPp6an8pYEShrm5ufMdHR33goODt6enp30AwMXd3iksLJxAuPnZ2dl/dHd3l0Cu+arAbITslDixs7MLGxwc7AKjHw0MDH6ztbX9BgAcsoKxT05OzmcNDQ3XW1tbh3R0dFK1tLT6LwROkoYwJMbDw8MJCOthb29vKQHDZNNO5+fnP21sbGwNCgraqK6unqTl511FDomhubl5enR0tCec3+jr63MVCATHTU1Ns9bW1rdUVFRqoFJTX1/fgEw2PS8QrS9MGnpDwnt0dCSFBGJra2s/0tPTm0AEzNvb2+vAVoHoYeUjoxn/Zk/bn2WlGTKIMo/Hs42KijKKiYmpdXBwuEFk4+Pj3yckJKTq6+tHY5vEYrH4h4eH5EOlMM9dMs8x3Nvb09jd3ZWVl5cXJYSJicmvhoaGvM3NTW0AUEwmU4C6pQGJ6FyDSWcpsdLQ0OgDk8cYHyFkhAE1NjYWhslVUFB4RPaEIcJ+YUBhSAFKfFFY/+zp6WnOzMwMWFxcHCgvL9/JyMgw9fX1nbOysvqF6BCG/4SUvg4iPvMQhhRsSBLIEit7e/uwxMTE22w2+wQN/WpgYGDvtWvXPsHHbJBzAPIRUtbq6ur7qMv6/Pz8idHR0XBydpbBVlNT28rLy9OQkpK6PzAw0AqjJBsbmx+wkikxOBwOBbZX0tPTS7a2tmS5XC4LXSh3ZGSEhbIqkDAQEzDRSb5E60pSVFTcT0lJ+SorK2sIDsrAWENMl0LH8VhZWfmwuLiYY2xsLLe2tsZCyVBILA5svoMNV9xGfP/35UEKZdbU1NTNycnJLyorK99DDW67ubn1w/FPKPoHuNu8oqIiL2VlZRm0PnZycjKF0Ar9+fv7U2gGfJRTtbOzsx98kYRj4RqeiQOKLh6HfBzeJRPGPgD+uqSkxMXCwsIVIBReDllPT09mVVUVhWQS+UErpBBWwdzc3Cmfzz8kB21tbb37+/tXAawDv8JeTRuIGNICeoWyAlg14H7tTU1NmQcHB4yCggISCaEK7p4KCQmhEFK+k5PTiqura46lpeVtcohX5uH29vZbeOIUAPhccxAxpIHoFT20GU3dxsPDg1VWVkYtLy/TR5Sfnx+F5iDo6uo6joyMbHdxcQmF48cihZf8EJaF+DlYaCLlreCIhWwUgeFJotDmqNnZWYG6uvqDtLS0W2DmAfsnsFGlJ/bCyKF01PEP4h0y0UyEZfcihk/gkIdafJsYo/YoPEsUXg8BHuZD1GmTo6PjTbDaQqK9W1FR0Y9u9CaOpchEXTJJQq2vrz+EvXCYmZnxcM8f/CcgHG3jTbyHLvN5XFwcG+2MwlsoCAgImA0PD0/Efx3yVAmHqqrqFs6fampqHtOyjY0NZXSjN3R1dUVhlpGR2ZeTk+PROhIrwnMFdzeGziMIDQ19ig8ohkwYFgllMQFJGtTzHvQlCEkIaFuw3MXT9G18fHwkGGXjbwXpQq88XghIPKMcWrCQeWnjpYAXRSElg0Qj9ScQ9/FaAJWUlILRKLi4FgnAvwBe6YatAEV1yQAAAABJRU5ErkJggg==",
    close: "data:image/png;base64,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",
    move: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAstJREFUSA3Nld9rklEYx+cMBX/QTaIIKjkYbqibiOAfINJNNxt6E8KIjIVEUBRBRHTRv2Ajhxde7c4LyboJvIguYhqDyS4G2RxqTRvOWkaSp+/zsgOv+r7h/BEdODzvec7zfT7vec9zzjvDGHN1Op3gzL9qAF7LZrOHjUbjGZ5np84FJOL3+38GAoGjg4ODlxhfmioUgDWfz9cGhBmNxl/5fP49fP6pQZH8utfr/UFA6kqlkiUSid1Wq3VvKlAAb3g8nlMO5DYcDpdrtdoW5vUTBSPhzaWlpe8cJLZ2u/10b2/vLWKcE4Mi2S2n0/lNDBI/q9Vqlk6nP7Tb7bWJQAGMLS4utsQQqedYLLZfr9dfIF49FhgJbjscjhMpSL/P7XYfl0qlN9BcHhkK8Z35+flmf3K5sV6v/53L5ejoXB0JCuHdubm5YzkA9ysUCmYwGJjL5WLBYJAVi8UvuBLvnxd6AYLZbrdLZ7CnRaPRLs5nU6PRnOh0OupNQA9RRPtWq3XXZrN9hOATF+HFtXi+gv4acXTMpBsCH0DcwKxw8Mmur6934/H4c2nFoBc5LpbL5e2VlRVGlsaDUWceTD60WCx1DAVgJBJhGxsbW7KCvgkOW1hYEPRk/wqF4JHZbD4iIL3h5ubmq76cskOCVavVbdxUjM4r5SBLY/LT/IAYzscmk+kzFUIymXw3ECDj4DBYoVUqFQFIljdJKCaf4N78mkqldpBbIZO/xw2NsGfLy8s8N5MC0koHPi8UTzOZzE4oFFL2ZJUZIF5LSWivVCqVACJYoVAQVkiWxtTp84r2lKoYH50xI/rQf3rErtJek3TYTvGkI965G4TCCnH/jrbCcxMhAFTYQ9oj3obew1GApCHoWRUKTCmgZJWOChRDaaVUQPQeZKl6Jw7jL0orpaqlPSWgqCoHDz0XjWs5dKi7dFwY1wOqRV8ly33/hf0D+qqSk3G9oaMAAAAASUVORK5CYII="
};
export default cursorConfig;
