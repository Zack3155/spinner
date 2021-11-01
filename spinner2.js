for (let start = 100; start <= 1900; start += 200) {
  setTimeout(() => {
    if (start === 200 || start === 900 || start === 1100 || start == 1900)
      process.stdout.write('\r|   ');
    else if (start === 300 || start === 1300)
      process.stdout.write('\r/   ');
    else if (start === 500 || start === 1500)
      process.stdout.write('\r-   ');
    else if (start === 700 || start === 1700)
      process.stdout.write('\r\   ');
  }, start);
}
