using System;
using System.Collections.Generic;
using System.Linq;

namespace csharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            // "100101011100000011010"
            Console.WriteLine(solution(32));
        }

        public static int solution(int N)
        {
            var binary = Convert.ToString(N, 2);

            var gaps = new List<int>();
            var startedGap = false;

            foreach (var el in binary)
            {
                if (el.Equals('1') && !startedGap)
                {
                    startedGap = true;
                    gaps.Add(0);
                }
                else if (el.Equals('0') && startedGap) gaps[(gaps.Count - 1)]++;
                else if (el.Equals('1') && startedGap && gaps.Last() > 0) startedGap = false;
            }

            if (startedGap && gaps.Count > 0) gaps.RemoveAt(gaps.Count - 1);

            return gaps.Count > 0 ? gaps.Max() : 0;
        }
    }
}
