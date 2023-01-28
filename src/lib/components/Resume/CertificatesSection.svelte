<script lang="ts">
	import { getShortDate } from '@/lib/utils/DateUtils';

	import type { Certificate, TechnologyCertificate } from '@prisma/client';

	type CertificateWithAssociations = TechnologyCertificate & {
		certificates: Certificate[];
	};

	export let certifications: CertificateWithAssociations[];
</script>

<section id="cvCertificates">
	<div class="border-b-2 border-black pb-3">
		<h3 class="uppercase text-2xl font-bold text-right">Certificates</h3>
	</div>

	<div class="border-t-4 border-black mt-0.5 pt-8 font-bold">
		{#each certifications as parent, i}
			<div class="flex items-center">
				<span class="text-lg">{parent.name}</span>
				<span class="px-4 py-0.5 ml-2 bg-black text-white rounded-full text-xs">
					{parent.certificates.length}
				</span>
			</div>
			<hr class="border border-black my-4" />
			{#each parent.certificates as certificate, j}
				<div class="grid grid-cols-2 items-center">
					<p class="sm:col-span-1 text-lg leading-none">
						{certificate.name}
					</p>
					<div class="col-span-1 text-right">
						<span
							class="px-4 py-0.5 border border-black rounded-full text-xs uppercase"
						>
							{getShortDate(certificate.completedAt)}
						</span>
					</div>
				</div>
				{#if j + 1 !== parent.certificates.length}
					<hr />
				{/if}
			{/each}
			{#if i + 1 !== certifications.length}
				<hr class="border border-black my-4" />
			{/if}
		{/each}
	</div>
</section>
