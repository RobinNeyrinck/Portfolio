import '../../assets/css/blogs.css';

function DrupalCampLiveWire() {
	return (
		<div className="blog-container">
			<h1>Cornel Andreev - Bringing Livewire to Drupal</h1>
			<img
				src="assets/images/thumbnails/drupal-camp-livewire.png"
				alt="Image of the speaker"
				className="blog-image"
			/>
			<p className="blog-content">
				During the keynote, the speaker delved into Livewire,
				highlighting its ability to seamlessly integrate interactivity
				into websites using a PHP Class, eliminating the need for
				extensive JavaScript knowledge. As someone familiar with both
				Laravel and Drupal, the speaker expressed their desire for a
				similar tool in the Drupal ecosystem. Inspired, they
				reverse-engineered Livewire and adapted its concepts to Drupal,
				resulting in the creation of Wire. Key points covered in the
				keynote included:
			</p>
			<ul className='blog-content'>
				<li>
					The speaker's motivation behind developing Wire and how it
					addresses their project needs.
				</li>
				<li>
					Anecdotes about Livewire's evolution and significance within
					the Laravel community.
				</li>
				<li>
					nsights into Wire's capabilities within the Drupal
					framework. - Real-world examples showcasing Wire's
					application and benefits.
				</li>
			</ul>

			<p className="tags">Tags:</p>
			<ul className="tag-list">
				<li>Attended Events</li>
				<li>Gent</li>
				<li>Drupal Camp</li>
			</ul>
		</div>
	);
}

export default DrupalCampLiveWire;
