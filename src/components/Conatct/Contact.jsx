import React from 'react';

export const Contact = () => {
	return (
		<>
			<section className='bg-[#E5E5E5] '>
				<div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
					<h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-black'>
						Contact Us
					</h2>
					<p className='mb-8 lg:mb-16 font-light text-center text-black'>
						Got a technical issue? Want to send feedback about a beta feature?
						Need details about our Business plan? Let us know.
					</p>
					<form
						action='#'
						className='space-y-8'
					>
						<div>
							<label
								for='email'
								className='block mb-2 text-sm font-medium text-black'
							>
								Your email
							</label>
							<input
								type='email'
								id='email'
								className='block p-2.5 w-full text-sm text-gray-900 bg-[#E5E5E5]  rounded-lg shadow-sm border border-black '
								placeholder='name@flowbite.com'
								required
							/>
						</div>
						<div>
							<label
								for='subject'
								className='block mb-2 text-sm font-medium text-black'
							>
								Subject
							</label>
							<input
								type='text'
								id='subject'
								className='block p-2.5 w-full text-sm text-gray-900 bg-[#E5E5E5] rounded-lg shadow-sm border border-black '
								placeholder='Let us know how we can help you'
								required
							/>
						</div>
						<div className='sm:col-span-2'>
							<label
								for='message'
								className='block mb-2 text-sm font-medium text-black'
							>
								Your message
							</label>
							<textarea
								id='message'
								rows='6'
								className='block p-2.5 w-full text-sm text-gray-900 bg-[#E5E5E5] rounded-lg shadow-sm border border-black '
								placeholder='Leave a comment...'
							></textarea>
						</div>
						<button
							type='submit'
							className='text-white bg-yellow-600 font-bold py-2 px-4 shadow-2xl'
						>
							Send message
						</button>
					</form>
				</div>
			</section>
		</>
	);
};
