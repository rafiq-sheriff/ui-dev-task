// Statistics data
const statistics = [
  {
    id: 1,
    percentage: '84%',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 2,
    percentage: '78%',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 3,
    percentage: '89%',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 4,
    percentage: '90%',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
]

const Section4 = () => {
  return (
    <section className="w-full pt-20 sm:pt-28 md:pt-36">
      <div className="max-w-[91rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 w-full bg-primary py-12 sm:py-16 md:py-20 rounded-none sm:rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {statistics.map((stat) => (
            <div key={stat.id} className="text-center space-y-3 sm:space-y-4">
              {/* Percentage */}
              <h3 className="text-4xl sm:text-5xl md:text-[2.5rem] font-bold text-white">
                {stat.percentage}
              </h3>
              {/* Description */}
              <p className="text-sm sm:text-base font-light text-white leading-relaxed px-2">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section4
