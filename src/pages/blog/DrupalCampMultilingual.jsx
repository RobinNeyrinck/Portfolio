import '../../assets/css/blogs.css';

function DrupalCampMultilingual() {
	return (
		<div className="blog-container">
			<h1>
				Luc Van Haute - How to manage multilingual content with local
				country validation
			</h1>
			<img
				src="assets/images/thumbnails/drupal-camp-multilingual.png"
				alt="Image of the speaker Luc Van Haute"
				className="blog-image"
			/>
			<p className="blog-content">
				So, during this keynote I attended, they emphasized how
				challenging it can be to translate content created in Drupal
				into multiple languages. But imagine also having the option to
				have the translated content checked and validated by local
				Drupal users in the country of the translated content; that
				really adds a serious challenge to the process. Fortunately,
				they showed how they automated these steps and how you can
				follow the entire process from within Drupal itself. They used
				AI to generate translations, cleverly reused previous versions
				of content, and collaborated with highly skilled human
				translators. It was truly inspiring to see how they streamlined
				this complex workflow.
			</p>

			<p className="tags">Tags:</p>
			<ul className="tag-list">
				<li>Attended Events</li>
				<li>Gent</li>
				<li>Drupal Camp</li>
			</ul>
		</div>
	);
}

export default DrupalCampMultilingual;
