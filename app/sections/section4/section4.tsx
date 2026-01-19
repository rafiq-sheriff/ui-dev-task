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
    <section className="w-full pt-36">
      <div className="max-w-[91rem] mx-auto px-16 w-full bg-primary py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {statistics.map((stat) => (
            <div key={stat.id} className="text-center space-y-4">
              {/* Percentage */}
              <h3 className="text-[2.5rem] font-bold text-white">
                {stat.percentage}
              </h3>
              {/* Description */}
              <p className="text-base font-light text-white leading-relaxed">
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