import Link from 'next/link';

export const Footer = () => {
  const navigationItems = [
    {
      title: 'Accueil',
      href: '#accueil',
   items: [
        {
          title: 'Fonctionnalités',
          href: '#fonctionnalités'
        },
        {
          title: 'Tarifs',
          href: '#tarifs',
        }
      ],
    },
   {
    title: 'Company',
    items: [
      { title: 'Mentions légales', href: '/legal' },  // page légale si tu en as
    ],
  },
  ];

  return (
    <div className='w-full py-20 lg:py-40 bg-foreground text-background px-4 md:px-0'>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-2 gap-10 items-center'>
          <div className='flex gap-8 flex-col items-start'>
            <div className='flex gap-2 flex-col'>
              <h2 className='text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left'>
                Vocalis AI
              </h2>
            </div>
            <div className='flex gap-20 flex-row'>
              <div className='flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left'>
                <p>vocalisai.beta@gmail.com</p>
              </div>
            </div>
          </div>
          <div className='grid lg:grid-cols-3 gap-10 items-start'>
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className='flex text-base gap-1 flex-col items-start'
              >
                <div className='flex flex-col gap-2'>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className='flex justify-between items-center'
                    >
                      <span className='text-xl'>{item.title}</span>
                    </Link>
                  ) : (
                    <p className='text-xl'>{item.title}</p>
                  )}
                  {item.items &&
                    item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className='flex justify-between items-center'
                      >
                        <span className='text-background/75'>
                          {subItem.title}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
