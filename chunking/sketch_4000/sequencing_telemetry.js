[
    {
        "aggregation": "segment", 
        "analysis_id": "0abbff64-aa76-40c0-bb44-5d135c8cae97", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 82, 
                "pass": 918
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 3.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 4.5
                }, 
                {
                    "count": 8, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 14, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 21, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 36, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 43, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 90, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 112, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 162, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 173, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 154, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 92, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 46, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 22, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 6, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 10, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 13.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 14.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 1000, 
                "mean": 8.9454193115234375, 
                "sum": 8945.4189453125
            }, 
            "read_len_events_sum_temp": 565351, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 1000, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 1000, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1000, 
                    "length": 0.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1000, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 1000, 
                "mean": 69.75743103027344, 
                "sum": 69757.4296875
            }, 
            "strand_sd_pa": {
                "count": 1000, 
                "mean": 7.932580471038818, 
                "sum": 7932.58056640625
            }
        }, 
        "channel_count": 345, 
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_hac.cfg", 
            "experiment_duration_set": "60", 
            "experiment_type": "genomic_dna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "1", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 456.458740234375, 
        "levels_sums": {
            "count": 1000, 
            "mean": null, 
            "open_pore_level_sum": null
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb13-24.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn", 
            "as_num_scalers": "1", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "40", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "160", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "conn_timeout_ms": "15000", 
            "cpu_threads_per_caller": "4", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "device": "", 
            "disable_events": "0", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "8", 
            "high_priority_threshold": "10", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_arrangements_files": "barcode_arrs_ncov8.cfg barcode_arrs_ncov96.cfg barcode_arrs_multivirus1.cfg barcode_arrs_multivirus8.cfg", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_block_size": "50000", 
            "max_queued_reads": "2000", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_mask": "40.000000", 
            "min_score_mid_barcodes": "50.000000", 
            "min_score_rear_override": "60.000000", 
            "model_file": "template_r9.4.1_450bps_sketch.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "96", 
            "num_callers": "1", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "port": "5555", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.603000", 
            "qscore_scale": "0.939000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "server_file_load_timeout": "30", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trace_domains_log": "", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 1000, 
        "reads_per_channel_dist": [
            {
                "channel": 1, 
                "count": 6
            }, 
            {
                "channel": 2, 
                "count": 2
            }, 
            {
                "channel": 6, 
                "count": 2
            }, 
            {
                "channel": 7, 
                "count": 5
            }, 
            {
                "channel": 8, 
                "count": 2
            }, 
            {
                "channel": 10, 
                "count": 4
            }, 
            {
                "channel": 11, 
                "count": 1
            }, 
            {
                "channel": 13, 
                "count": 3
            }, 
            {
                "channel": 14, 
                "count": 2
            }, 
            {
                "channel": 16, 
                "count": 4
            }, 
            {
                "channel": 18, 
                "count": 2
            }, 
            {
                "channel": 19, 
                "count": 1
            }, 
            {
                "channel": 21, 
                "count": 1
            }, 
            {
                "channel": 22, 
                "count": 5
            }, 
            {
                "channel": 23, 
                "count": 2
            }, 
            {
                "channel": 24, 
                "count": 3
            }, 
            {
                "channel": 25, 
                "count": 6
            }, 
            {
                "channel": 26, 
                "count": 1
            }, 
            {
                "channel": 27, 
                "count": 2
            }, 
            {
                "channel": 30, 
                "count": 1
            }, 
            {
                "channel": 31, 
                "count": 1
            }, 
            {
                "channel": 34, 
                "count": 1
            }, 
            {
                "channel": 40, 
                "count": 3
            }, 
            {
                "channel": 41, 
                "count": 4
            }, 
            {
                "channel": 42, 
                "count": 4
            }, 
            {
                "channel": 47, 
                "count": 1
            }, 
            {
                "channel": 49, 
                "count": 1
            }, 
            {
                "channel": 55, 
                "count": 1
            }, 
            {
                "channel": 56, 
                "count": 4
            }, 
            {
                "channel": 57, 
                "count": 3
            }, 
            {
                "channel": 59, 
                "count": 5
            }, 
            {
                "channel": 60, 
                "count": 2
            }, 
            {
                "channel": 62, 
                "count": 1
            }, 
            {
                "channel": 63, 
                "count": 3
            }, 
            {
                "channel": 66, 
                "count": 1
            }, 
            {
                "channel": 69, 
                "count": 1
            }, 
            {
                "channel": 70, 
                "count": 4
            }, 
            {
                "channel": 71, 
                "count": 4
            }, 
            {
                "channel": 72, 
                "count": 2
            }, 
            {
                "channel": 74, 
                "count": 2
            }, 
            {
                "channel": 75, 
                "count": 4
            }, 
            {
                "channel": 76, 
                "count": 4
            }, 
            {
                "channel": 77, 
                "count": 3
            }, 
            {
                "channel": 78, 
                "count": 1
            }, 
            {
                "channel": 79, 
                "count": 4
            }, 
            {
                "channel": 80, 
                "count": 3
            }, 
            {
                "channel": 82, 
                "count": 2
            }, 
            {
                "channel": 84, 
                "count": 3
            }, 
            {
                "channel": 86, 
                "count": 5
            }, 
            {
                "channel": 87, 
                "count": 3
            }, 
            {
                "channel": 88, 
                "count": 4
            }, 
            {
                "channel": 92, 
                "count": 2
            }, 
            {
                "channel": 93, 
                "count": 3
            }, 
            {
                "channel": 94, 
                "count": 1
            }, 
            {
                "channel": 95, 
                "count": 6
            }, 
            {
                "channel": 97, 
                "count": 1
            }, 
            {
                "channel": 98, 
                "count": 1
            }, 
            {
                "channel": 100, 
                "count": 6
            }, 
            {
                "channel": 101, 
                "count": 2
            }, 
            {
                "channel": 103, 
                "count": 5
            }, 
            {
                "channel": 105, 
                "count": 4
            }, 
            {
                "channel": 106, 
                "count": 2
            }, 
            {
                "channel": 107, 
                "count": 1
            }, 
            {
                "channel": 108, 
                "count": 1
            }, 
            {
                "channel": 109, 
                "count": 3
            }, 
            {
                "channel": 110, 
                "count": 3
            }, 
            {
                "channel": 111, 
                "count": 1
            }, 
            {
                "channel": 112, 
                "count": 5
            }, 
            {
                "channel": 114, 
                "count": 3
            }, 
            {
                "channel": 116, 
                "count": 2
            }, 
            {
                "channel": 117, 
                "count": 4
            }, 
            {
                "channel": 118, 
                "count": 3
            }, 
            {
                "channel": 119, 
                "count": 2
            }, 
            {
                "channel": 120, 
                "count": 2
            }, 
            {
                "channel": 122, 
                "count": 3
            }, 
            {
                "channel": 123, 
                "count": 3
            }, 
            {
                "channel": 125, 
                "count": 4
            }, 
            {
                "channel": 126, 
                "count": 4
            }, 
            {
                "channel": 127, 
                "count": 2
            }, 
            {
                "channel": 128, 
                "count": 2
            }, 
            {
                "channel": 130, 
                "count": 3
            }, 
            {
                "channel": 131, 
                "count": 1
            }, 
            {
                "channel": 132, 
                "count": 2
            }, 
            {
                "channel": 133, 
                "count": 5
            }, 
            {
                "channel": 137, 
                "count": 1
            }, 
            {
                "channel": 138, 
                "count": 5
            }, 
            {
                "channel": 139, 
                "count": 4
            }, 
            {
                "channel": 140, 
                "count": 3
            }, 
            {
                "channel": 141, 
                "count": 3
            }, 
            {
                "channel": 142, 
                "count": 5
            }, 
            {
                "channel": 143, 
                "count": 2
            }, 
            {
                "channel": 144, 
                "count": 3
            }, 
            {
                "channel": 146, 
                "count": 3
            }, 
            {
                "channel": 147, 
                "count": 1
            }, 
            {
                "channel": 148, 
                "count": 3
            }, 
            {
                "channel": 153, 
                "count": 2
            }, 
            {
                "channel": 154, 
                "count": 2
            }, 
            {
                "channel": 155, 
                "count": 3
            }, 
            {
                "channel": 157, 
                "count": 1
            }, 
            {
                "channel": 158, 
                "count": 4
            }, 
            {
                "channel": 159, 
                "count": 3
            }, 
            {
                "channel": 160, 
                "count": 2
            }, 
            {
                "channel": 161, 
                "count": 3
            }, 
            {
                "channel": 162, 
                "count": 4
            }, 
            {
                "channel": 163, 
                "count": 2
            }, 
            {
                "channel": 165, 
                "count": 6
            }, 
            {
                "channel": 166, 
                "count": 2
            }, 
            {
                "channel": 167, 
                "count": 2
            }, 
            {
                "channel": 171, 
                "count": 4
            }, 
            {
                "channel": 174, 
                "count": 2
            }, 
            {
                "channel": 176, 
                "count": 2
            }, 
            {
                "channel": 177, 
                "count": 1
            }, 
            {
                "channel": 178, 
                "count": 6
            }, 
            {
                "channel": 179, 
                "count": 5
            }, 
            {
                "channel": 180, 
                "count": 3
            }, 
            {
                "channel": 181, 
                "count": 1
            }, 
            {
                "channel": 182, 
                "count": 6
            }, 
            {
                "channel": 183, 
                "count": 2
            }, 
            {
                "channel": 184, 
                "count": 6
            }, 
            {
                "channel": 185, 
                "count": 2
            }, 
            {
                "channel": 186, 
                "count": 2
            }, 
            {
                "channel": 187, 
                "count": 1
            }, 
            {
                "channel": 188, 
                "count": 4
            }, 
            {
                "channel": 189, 
                "count": 2
            }, 
            {
                "channel": 190, 
                "count": 4
            }, 
            {
                "channel": 191, 
                "count": 4
            }, 
            {
                "channel": 192, 
                "count": 3
            }, 
            {
                "channel": 195, 
                "count": 2
            }, 
            {
                "channel": 197, 
                "count": 2
            }, 
            {
                "channel": 199, 
                "count": 3
            }, 
            {
                "channel": 201, 
                "count": 1
            }, 
            {
                "channel": 205, 
                "count": 5
            }, 
            {
                "channel": 206, 
                "count": 2
            }, 
            {
                "channel": 207, 
                "count": 5
            }, 
            {
                "channel": 208, 
                "count": 3
            }, 
            {
                "channel": 209, 
                "count": 1
            }, 
            {
                "channel": 210, 
                "count": 4
            }, 
            {
                "channel": 212, 
                "count": 4
            }, 
            {
                "channel": 216, 
                "count": 2
            }, 
            {
                "channel": 218, 
                "count": 7
            }, 
            {
                "channel": 219, 
                "count": 1
            }, 
            {
                "channel": 220, 
                "count": 1
            }, 
            {
                "channel": 223, 
                "count": 2
            }, 
            {
                "channel": 224, 
                "count": 2
            }, 
            {
                "channel": 225, 
                "count": 6
            }, 
            {
                "channel": 226, 
                "count": 2
            }, 
            {
                "channel": 229, 
                "count": 3
            }, 
            {
                "channel": 231, 
                "count": 2
            }, 
            {
                "channel": 232, 
                "count": 2
            }, 
            {
                "channel": 233, 
                "count": 5
            }, 
            {
                "channel": 234, 
                "count": 3
            }, 
            {
                "channel": 236, 
                "count": 4
            }, 
            {
                "channel": 237, 
                "count": 2
            }, 
            {
                "channel": 240, 
                "count": 3
            }, 
            {
                "channel": 241, 
                "count": 2
            }, 
            {
                "channel": 242, 
                "count": 4
            }, 
            {
                "channel": 246, 
                "count": 1
            }, 
            {
                "channel": 247, 
                "count": 8
            }, 
            {
                "channel": 248, 
                "count": 5
            }, 
            {
                "channel": 250, 
                "count": 2
            }, 
            {
                "channel": 252, 
                "count": 2
            }, 
            {
                "channel": 253, 
                "count": 3
            }, 
            {
                "channel": 254, 
                "count": 4
            }, 
            {
                "channel": 255, 
                "count": 4
            }, 
            {
                "channel": 256, 
                "count": 2
            }, 
            {
                "channel": 257, 
                "count": 2
            }, 
            {
                "channel": 258, 
                "count": 1
            }, 
            {
                "channel": 259, 
                "count": 4
            }, 
            {
                "channel": 260, 
                "count": 5
            }, 
            {
                "channel": 261, 
                "count": 3
            }, 
            {
                "channel": 262, 
                "count": 7
            }, 
            {
                "channel": 266, 
                "count": 2
            }, 
            {
                "channel": 268, 
                "count": 2
            }, 
            {
                "channel": 269, 
                "count": 3
            }, 
            {
                "channel": 270, 
                "count": 1
            }, 
            {
                "channel": 271, 
                "count": 3
            }, 
            {
                "channel": 273, 
                "count": 3
            }, 
            {
                "channel": 274, 
                "count": 1
            }, 
            {
                "channel": 275, 
                "count": 1
            }, 
            {
                "channel": 276, 
                "count": 8
            }, 
            {
                "channel": 277, 
                "count": 2
            }, 
            {
                "channel": 278, 
                "count": 2
            }, 
            {
                "channel": 280, 
                "count": 3
            }, 
            {
                "channel": 281, 
                "count": 1
            }, 
            {
                "channel": 284, 
                "count": 5
            }, 
            {
                "channel": 285, 
                "count": 2
            }, 
            {
                "channel": 286, 
                "count": 1
            }, 
            {
                "channel": 287, 
                "count": 4
            }, 
            {
                "channel": 289, 
                "count": 4
            }, 
            {
                "channel": 291, 
                "count": 2
            }, 
            {
                "channel": 292, 
                "count": 2
            }, 
            {
                "channel": 293, 
                "count": 1
            }, 
            {
                "channel": 295, 
                "count": 4
            }, 
            {
                "channel": 296, 
                "count": 4
            }, 
            {
                "channel": 297, 
                "count": 3
            }, 
            {
                "channel": 299, 
                "count": 1
            }, 
            {
                "channel": 303, 
                "count": 3
            }, 
            {
                "channel": 305, 
                "count": 4
            }, 
            {
                "channel": 307, 
                "count": 2
            }, 
            {
                "channel": 308, 
                "count": 2
            }, 
            {
                "channel": 309, 
                "count": 1
            }, 
            {
                "channel": 310, 
                "count": 2
            }, 
            {
                "channel": 311, 
                "count": 3
            }, 
            {
                "channel": 313, 
                "count": 6
            }, 
            {
                "channel": 314, 
                "count": 1
            }, 
            {
                "channel": 315, 
                "count": 4
            }, 
            {
                "channel": 317, 
                "count": 1
            }, 
            {
                "channel": 318, 
                "count": 3
            }, 
            {
                "channel": 320, 
                "count": 5
            }, 
            {
                "channel": 322, 
                "count": 3
            }, 
            {
                "channel": 323, 
                "count": 6
            }, 
            {
                "channel": 324, 
                "count": 1
            }, 
            {
                "channel": 325, 
                "count": 1
            }, 
            {
                "channel": 326, 
                "count": 1
            }, 
            {
                "channel": 329, 
                "count": 2
            }, 
            {
                "channel": 330, 
                "count": 4
            }, 
            {
                "channel": 331, 
                "count": 2
            }, 
            {
                "channel": 333, 
                "count": 5
            }, 
            {
                "channel": 335, 
                "count": 4
            }, 
            {
                "channel": 337, 
                "count": 1
            }, 
            {
                "channel": 338, 
                "count": 2
            }, 
            {
                "channel": 340, 
                "count": 5
            }, 
            {
                "channel": 341, 
                "count": 4
            }, 
            {
                "channel": 346, 
                "count": 1
            }, 
            {
                "channel": 347, 
                "count": 2
            }, 
            {
                "channel": 349, 
                "count": 5
            }, 
            {
                "channel": 350, 
                "count": 2
            }, 
            {
                "channel": 351, 
                "count": 1
            }, 
            {
                "channel": 352, 
                "count": 6
            }, 
            {
                "channel": 354, 
                "count": 2
            }, 
            {
                "channel": 357, 
                "count": 3
            }, 
            {
                "channel": 360, 
                "count": 3
            }, 
            {
                "channel": 362, 
                "count": 2
            }, 
            {
                "channel": 364, 
                "count": 3
            }, 
            {
                "channel": 367, 
                "count": 1
            }, 
            {
                "channel": 368, 
                "count": 7
            }, 
            {
                "channel": 369, 
                "count": 2
            }, 
            {
                "channel": 370, 
                "count": 1
            }, 
            {
                "channel": 372, 
                "count": 3
            }, 
            {
                "channel": 373, 
                "count": 2
            }, 
            {
                "channel": 375, 
                "count": 2
            }, 
            {
                "channel": 376, 
                "count": 2
            }, 
            {
                "channel": 380, 
                "count": 5
            }, 
            {
                "channel": 381, 
                "count": 2
            }, 
            {
                "channel": 382, 
                "count": 4
            }, 
            {
                "channel": 383, 
                "count": 3
            }, 
            {
                "channel": 384, 
                "count": 3
            }, 
            {
                "channel": 385, 
                "count": 2
            }, 
            {
                "channel": 386, 
                "count": 4
            }, 
            {
                "channel": 387, 
                "count": 4
            }, 
            {
                "channel": 388, 
                "count": 4
            }, 
            {
                "channel": 389, 
                "count": 2
            }, 
            {
                "channel": 391, 
                "count": 2
            }, 
            {
                "channel": 393, 
                "count": 3
            }, 
            {
                "channel": 394, 
                "count": 3
            }, 
            {
                "channel": 396, 
                "count": 1
            }, 
            {
                "channel": 397, 
                "count": 4
            }, 
            {
                "channel": 399, 
                "count": 1
            }, 
            {
                "channel": 400, 
                "count": 3
            }, 
            {
                "channel": 402, 
                "count": 1
            }, 
            {
                "channel": 404, 
                "count": 3
            }, 
            {
                "channel": 405, 
                "count": 2
            }, 
            {
                "channel": 406, 
                "count": 3
            }, 
            {
                "channel": 407, 
                "count": 2
            }, 
            {
                "channel": 408, 
                "count": 4
            }, 
            {
                "channel": 410, 
                "count": 5
            }, 
            {
                "channel": 411, 
                "count": 2
            }, 
            {
                "channel": 412, 
                "count": 4
            }, 
            {
                "channel": 413, 
                "count": 5
            }, 
            {
                "channel": 414, 
                "count": 6
            }, 
            {
                "channel": 415, 
                "count": 1
            }, 
            {
                "channel": 416, 
                "count": 4
            }, 
            {
                "channel": 417, 
                "count": 1
            }, 
            {
                "channel": 418, 
                "count": 3
            }, 
            {
                "channel": 419, 
                "count": 1
            }, 
            {
                "channel": 420, 
                "count": 4
            }, 
            {
                "channel": 421, 
                "count": 2
            }, 
            {
                "channel": 422, 
                "count": 3
            }, 
            {
                "channel": 423, 
                "count": 2
            }, 
            {
                "channel": 424, 
                "count": 3
            }, 
            {
                "channel": 425, 
                "count": 4
            }, 
            {
                "channel": 426, 
                "count": 4
            }, 
            {
                "channel": 428, 
                "count": 5
            }, 
            {
                "channel": 429, 
                "count": 5
            }, 
            {
                "channel": 430, 
                "count": 2
            }, 
            {
                "channel": 433, 
                "count": 4
            }, 
            {
                "channel": 434, 
                "count": 2
            }, 
            {
                "channel": 436, 
                "count": 2
            }, 
            {
                "channel": 437, 
                "count": 2
            }, 
            {
                "channel": 438, 
                "count": 1
            }, 
            {
                "channel": 439, 
                "count": 2
            }, 
            {
                "channel": 441, 
                "count": 2
            }, 
            {
                "channel": 442, 
                "count": 5
            }, 
            {
                "channel": 443, 
                "count": 2
            }, 
            {
                "channel": 444, 
                "count": 1
            }, 
            {
                "channel": 445, 
                "count": 5
            }, 
            {
                "channel": 447, 
                "count": 1
            }, 
            {
                "channel": 448, 
                "count": 4
            }, 
            {
                "channel": 449, 
                "count": 4
            }, 
            {
                "channel": 451, 
                "count": 3
            }, 
            {
                "channel": 452, 
                "count": 1
            }, 
            {
                "channel": 453, 
                "count": 3
            }, 
            {
                "channel": 455, 
                "count": 3
            }, 
            {
                "channel": 456, 
                "count": 4
            }, 
            {
                "channel": 457, 
                "count": 1
            }, 
            {
                "channel": 458, 
                "count": 4
            }, 
            {
                "channel": 459, 
                "count": 5
            }, 
            {
                "channel": 460, 
                "count": 3
            }, 
            {
                "channel": 461, 
                "count": 3
            }, 
            {
                "channel": 462, 
                "count": 4
            }, 
            {
                "channel": 463, 
                "count": 2
            }, 
            {
                "channel": 464, 
                "count": 5
            }, 
            {
                "channel": 468, 
                "count": 2
            }, 
            {
                "channel": 469, 
                "count": 2
            }, 
            {
                "channel": 470, 
                "count": 3
            }, 
            {
                "channel": 472, 
                "count": 5
            }, 
            {
                "channel": 474, 
                "count": 2
            }, 
            {
                "channel": 477, 
                "count": 1
            }, 
            {
                "channel": 478, 
                "count": 2
            }, 
            {
                "channel": 479, 
                "count": 5
            }, 
            {
                "channel": 480, 
                "count": 1
            }, 
            {
                "channel": 482, 
                "count": 3
            }, 
            {
                "channel": 483, 
                "count": 3
            }, 
            {
                "channel": 485, 
                "count": 3
            }, 
            {
                "channel": 486, 
                "count": 2
            }, 
            {
                "channel": 488, 
                "count": 2
            }, 
            {
                "channel": 490, 
                "count": 3
            }, 
            {
                "channel": 491, 
                "count": 3
            }, 
            {
                "channel": 492, 
                "count": 2
            }, 
            {
                "channel": 493, 
                "count": 3
            }, 
            {
                "channel": 494, 
                "count": 4
            }, 
            {
                "channel": 495, 
                "count": 3
            }, 
            {
                "channel": 497, 
                "count": 7
            }, 
            {
                "channel": 498, 
                "count": 2
            }, 
            {
                "channel": 499, 
                "count": 4
            }, 
            {
                "channel": 500, 
                "count": 5
            }, 
            {
                "channel": 501, 
                "count": 3
            }, 
            {
                "channel": 503, 
                "count": 2
            }, 
            {
                "channel": 505, 
                "count": 6
            }, 
            {
                "channel": 507, 
                "count": 1
            }, 
            {
                "channel": 508, 
                "count": 1
            }, 
            {
                "channel": 509, 
                "count": 3
            }, 
            {
                "channel": 510, 
                "count": 3
            }, 
            {
                "channel": 511, 
                "count": 1
            }, 
            {
                "channel": 512, 
                "count": 8
            }
        ], 
        "run_id": "af307028575a34db3268b4df36412691cb25b558", 
        "segment_duration": 60, 
        "segment_number": 1, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "5.0.11+2b6dbff"
        }, 
        "tracking_id": {
            "asic_id": "415414511", 
            "asic_id_eeprom": "5333661", 
            "asic_temp": "32.945076", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA30000", 
            "device_type": "gridion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.9", 
            "exp_script_name": "5ac268c03773fdf6596417eb4bc5319ddac568c3", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-08-22T07:20:05Z", 
            "flow_cell_id": "FAL00432", 
            "guppy_version": "3.0.6+9999d81", 
            "heatsink_temp": "33.664062", 
            "hostname": "GXB02001", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "bfb159b1-a5d8-469a-a2ab-5dd96df1e838", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "ml007", 
            "protocol_run_id": "91168a14-3308-42fb-be73-c607a6a35c72", 
            "protocols_version": "4.1.9", 
            "run_id": "af307028575a34db3268b4df36412691cb25b558", 
            "sample_id": "zymo_gradual_reject_40x_hac_post_control", 
            "time_stamp": "2021-07-23T09:19:00Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "cumulative", 
        "analysis_id": "0abbff64-aa76-40c0-bb44-5d135c8cae97", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 82, 
                "pass": 918
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 3.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 4.5
                }, 
                {
                    "count": 8, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 14, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 21, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 36, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 43, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 90, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 112, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 162, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 173, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 154, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 92, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 46, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 22, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 6, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 10, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 13.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 14.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 1000, 
                "mean": 8.9454193115234375, 
                "sum": 8945.4189453125
            }, 
            "read_len_events_sum_temp": 565351, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 1000, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 1000, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1000, 
                    "length": 0.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1000, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 1000, 
                "mean": 69.75743103027344, 
                "sum": 69757.4296875
            }, 
            "strand_sd_pa": {
                "count": 1000, 
                "mean": 7.932580471038818, 
                "sum": 7932.58056640625
            }
        }, 
        "channel_count": 345, 
        "context_tags": {
            "basecall_config_filename": "dna_r9.4.1_450bps_hac.cfg", 
            "experiment_duration_set": "60", 
            "experiment_type": "genomic_dna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "1", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 456.458740234375, 
        "levels_sums": {
            "count": 1000, 
            "mean": null, 
            "open_pore_level_sum": null
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb13-24.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn", 
            "as_num_scalers": "1", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "40", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "160", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "conn_timeout_ms": "15000", 
            "cpu_threads_per_caller": "4", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "device": "", 
            "disable_events": "0", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "8", 
            "high_priority_threshold": "10", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_arrangements_files": "barcode_arrs_ncov8.cfg barcode_arrs_ncov96.cfg barcode_arrs_multivirus1.cfg barcode_arrs_multivirus8.cfg", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_block_size": "50000", 
            "max_queued_reads": "2000", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_mask": "40.000000", 
            "min_score_mid_barcodes": "50.000000", 
            "min_score_rear_override": "60.000000", 
            "model_file": "template_r9.4.1_450bps_sketch.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "96", 
            "num_callers": "1", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "port": "5555", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.603000", 
            "qscore_scale": "0.939000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "server_file_load_timeout": "30", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trace_domains_log": "", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 1000, 
        "reads_per_channel_dist": [
            {
                "channel": 1, 
                "count": 6
            }, 
            {
                "channel": 2, 
                "count": 2
            }, 
            {
                "channel": 6, 
                "count": 2
            }, 
            {
                "channel": 7, 
                "count": 5
            }, 
            {
                "channel": 8, 
                "count": 2
            }, 
            {
                "channel": 10, 
                "count": 4
            }, 
            {
                "channel": 11, 
                "count": 1
            }, 
            {
                "channel": 13, 
                "count": 3
            }, 
            {
                "channel": 14, 
                "count": 2
            }, 
            {
                "channel": 16, 
                "count": 4
            }, 
            {
                "channel": 18, 
                "count": 2
            }, 
            {
                "channel": 19, 
                "count": 1
            }, 
            {
                "channel": 21, 
                "count": 1
            }, 
            {
                "channel": 22, 
                "count": 5
            }, 
            {
                "channel": 23, 
                "count": 2
            }, 
            {
                "channel": 24, 
                "count": 3
            }, 
            {
                "channel": 25, 
                "count": 6
            }, 
            {
                "channel": 26, 
                "count": 1
            }, 
            {
                "channel": 27, 
                "count": 2
            }, 
            {
                "channel": 30, 
                "count": 1
            }, 
            {
                "channel": 31, 
                "count": 1
            }, 
            {
                "channel": 34, 
                "count": 1
            }, 
            {
                "channel": 40, 
                "count": 3
            }, 
            {
                "channel": 41, 
                "count": 4
            }, 
            {
                "channel": 42, 
                "count": 4
            }, 
            {
                "channel": 47, 
                "count": 1
            }, 
            {
                "channel": 49, 
                "count": 1
            }, 
            {
                "channel": 55, 
                "count": 1
            }, 
            {
                "channel": 56, 
                "count": 4
            }, 
            {
                "channel": 57, 
                "count": 3
            }, 
            {
                "channel": 59, 
                "count": 5
            }, 
            {
                "channel": 60, 
                "count": 2
            }, 
            {
                "channel": 62, 
                "count": 1
            }, 
            {
                "channel": 63, 
                "count": 3
            }, 
            {
                "channel": 66, 
                "count": 1
            }, 
            {
                "channel": 69, 
                "count": 1
            }, 
            {
                "channel": 70, 
                "count": 4
            }, 
            {
                "channel": 71, 
                "count": 4
            }, 
            {
                "channel": 72, 
                "count": 2
            }, 
            {
                "channel": 74, 
                "count": 2
            }, 
            {
                "channel": 75, 
                "count": 4
            }, 
            {
                "channel": 76, 
                "count": 4
            }, 
            {
                "channel": 77, 
                "count": 3
            }, 
            {
                "channel": 78, 
                "count": 1
            }, 
            {
                "channel": 79, 
                "count": 4
            }, 
            {
                "channel": 80, 
                "count": 3
            }, 
            {
                "channel": 82, 
                "count": 2
            }, 
            {
                "channel": 84, 
                "count": 3
            }, 
            {
                "channel": 86, 
                "count": 5
            }, 
            {
                "channel": 87, 
                "count": 3
            }, 
            {
                "channel": 88, 
                "count": 4
            }, 
            {
                "channel": 92, 
                "count": 2
            }, 
            {
                "channel": 93, 
                "count": 3
            }, 
            {
                "channel": 94, 
                "count": 1
            }, 
            {
                "channel": 95, 
                "count": 6
            }, 
            {
                "channel": 97, 
                "count": 1
            }, 
            {
                "channel": 98, 
                "count": 1
            }, 
            {
                "channel": 100, 
                "count": 6
            }, 
            {
                "channel": 101, 
                "count": 2
            }, 
            {
                "channel": 103, 
                "count": 5
            }, 
            {
                "channel": 105, 
                "count": 4
            }, 
            {
                "channel": 106, 
                "count": 2
            }, 
            {
                "channel": 107, 
                "count": 1
            }, 
            {
                "channel": 108, 
                "count": 1
            }, 
            {
                "channel": 109, 
                "count": 3
            }, 
            {
                "channel": 110, 
                "count": 3
            }, 
            {
                "channel": 111, 
                "count": 1
            }, 
            {
                "channel": 112, 
                "count": 5
            }, 
            {
                "channel": 114, 
                "count": 3
            }, 
            {
                "channel": 116, 
                "count": 2
            }, 
            {
                "channel": 117, 
                "count": 4
            }, 
            {
                "channel": 118, 
                "count": 3
            }, 
            {
                "channel": 119, 
                "count": 2
            }, 
            {
                "channel": 120, 
                "count": 2
            }, 
            {
                "channel": 122, 
                "count": 3
            }, 
            {
                "channel": 123, 
                "count": 3
            }, 
            {
                "channel": 125, 
                "count": 4
            }, 
            {
                "channel": 126, 
                "count": 4
            }, 
            {
                "channel": 127, 
                "count": 2
            }, 
            {
                "channel": 128, 
                "count": 2
            }, 
            {
                "channel": 130, 
                "count": 3
            }, 
            {
                "channel": 131, 
                "count": 1
            }, 
            {
                "channel": 132, 
                "count": 2
            }, 
            {
                "channel": 133, 
                "count": 5
            }, 
            {
                "channel": 137, 
                "count": 1
            }, 
            {
                "channel": 138, 
                "count": 5
            }, 
            {
                "channel": 139, 
                "count": 4
            }, 
            {
                "channel": 140, 
                "count": 3
            }, 
            {
                "channel": 141, 
                "count": 3
            }, 
            {
                "channel": 142, 
                "count": 5
            }, 
            {
                "channel": 143, 
                "count": 2
            }, 
            {
                "channel": 144, 
                "count": 3
            }, 
            {
                "channel": 146, 
                "count": 3
            }, 
            {
                "channel": 147, 
                "count": 1
            }, 
            {
                "channel": 148, 
                "count": 3
            }, 
            {
                "channel": 153, 
                "count": 2
            }, 
            {
                "channel": 154, 
                "count": 2
            }, 
            {
                "channel": 155, 
                "count": 3
            }, 
            {
                "channel": 157, 
                "count": 1
            }, 
            {
                "channel": 158, 
                "count": 4
            }, 
            {
                "channel": 159, 
                "count": 3
            }, 
            {
                "channel": 160, 
                "count": 2
            }, 
            {
                "channel": 161, 
                "count": 3
            }, 
            {
                "channel": 162, 
                "count": 4
            }, 
            {
                "channel": 163, 
                "count": 2
            }, 
            {
                "channel": 165, 
                "count": 6
            }, 
            {
                "channel": 166, 
                "count": 2
            }, 
            {
                "channel": 167, 
                "count": 2
            }, 
            {
                "channel": 171, 
                "count": 4
            }, 
            {
                "channel": 174, 
                "count": 2
            }, 
            {
                "channel": 176, 
                "count": 2
            }, 
            {
                "channel": 177, 
                "count": 1
            }, 
            {
                "channel": 178, 
                "count": 6
            }, 
            {
                "channel": 179, 
                "count": 5
            }, 
            {
                "channel": 180, 
                "count": 3
            }, 
            {
                "channel": 181, 
                "count": 1
            }, 
            {
                "channel": 182, 
                "count": 6
            }, 
            {
                "channel": 183, 
                "count": 2
            }, 
            {
                "channel": 184, 
                "count": 6
            }, 
            {
                "channel": 185, 
                "count": 2
            }, 
            {
                "channel": 186, 
                "count": 2
            }, 
            {
                "channel": 187, 
                "count": 1
            }, 
            {
                "channel": 188, 
                "count": 4
            }, 
            {
                "channel": 189, 
                "count": 2
            }, 
            {
                "channel": 190, 
                "count": 4
            }, 
            {
                "channel": 191, 
                "count": 4
            }, 
            {
                "channel": 192, 
                "count": 3
            }, 
            {
                "channel": 195, 
                "count": 2
            }, 
            {
                "channel": 197, 
                "count": 2
            }, 
            {
                "channel": 199, 
                "count": 3
            }, 
            {
                "channel": 201, 
                "count": 1
            }, 
            {
                "channel": 205, 
                "count": 5
            }, 
            {
                "channel": 206, 
                "count": 2
            }, 
            {
                "channel": 207, 
                "count": 5
            }, 
            {
                "channel": 208, 
                "count": 3
            }, 
            {
                "channel": 209, 
                "count": 1
            }, 
            {
                "channel": 210, 
                "count": 4
            }, 
            {
                "channel": 212, 
                "count": 4
            }, 
            {
                "channel": 216, 
                "count": 2
            }, 
            {
                "channel": 218, 
                "count": 7
            }, 
            {
                "channel": 219, 
                "count": 1
            }, 
            {
                "channel": 220, 
                "count": 1
            }, 
            {
                "channel": 223, 
                "count": 2
            }, 
            {
                "channel": 224, 
                "count": 2
            }, 
            {
                "channel": 225, 
                "count": 6
            }, 
            {
                "channel": 226, 
                "count": 2
            }, 
            {
                "channel": 229, 
                "count": 3
            }, 
            {
                "channel": 231, 
                "count": 2
            }, 
            {
                "channel": 232, 
                "count": 2
            }, 
            {
                "channel": 233, 
                "count": 5
            }, 
            {
                "channel": 234, 
                "count": 3
            }, 
            {
                "channel": 236, 
                "count": 4
            }, 
            {
                "channel": 237, 
                "count": 2
            }, 
            {
                "channel": 240, 
                "count": 3
            }, 
            {
                "channel": 241, 
                "count": 2
            }, 
            {
                "channel": 242, 
                "count": 4
            }, 
            {
                "channel": 246, 
                "count": 1
            }, 
            {
                "channel": 247, 
                "count": 8
            }, 
            {
                "channel": 248, 
                "count": 5
            }, 
            {
                "channel": 250, 
                "count": 2
            }, 
            {
                "channel": 252, 
                "count": 2
            }, 
            {
                "channel": 253, 
                "count": 3
            }, 
            {
                "channel": 254, 
                "count": 4
            }, 
            {
                "channel": 255, 
                "count": 4
            }, 
            {
                "channel": 256, 
                "count": 2
            }, 
            {
                "channel": 257, 
                "count": 2
            }, 
            {
                "channel": 258, 
                "count": 1
            }, 
            {
                "channel": 259, 
                "count": 4
            }, 
            {
                "channel": 260, 
                "count": 5
            }, 
            {
                "channel": 261, 
                "count": 3
            }, 
            {
                "channel": 262, 
                "count": 7
            }, 
            {
                "channel": 266, 
                "count": 2
            }, 
            {
                "channel": 268, 
                "count": 2
            }, 
            {
                "channel": 269, 
                "count": 3
            }, 
            {
                "channel": 270, 
                "count": 1
            }, 
            {
                "channel": 271, 
                "count": 3
            }, 
            {
                "channel": 273, 
                "count": 3
            }, 
            {
                "channel": 274, 
                "count": 1
            }, 
            {
                "channel": 275, 
                "count": 1
            }, 
            {
                "channel": 276, 
                "count": 8
            }, 
            {
                "channel": 277, 
                "count": 2
            }, 
            {
                "channel": 278, 
                "count": 2
            }, 
            {
                "channel": 280, 
                "count": 3
            }, 
            {
                "channel": 281, 
                "count": 1
            }, 
            {
                "channel": 284, 
                "count": 5
            }, 
            {
                "channel": 285, 
                "count": 2
            }, 
            {
                "channel": 286, 
                "count": 1
            }, 
            {
                "channel": 287, 
                "count": 4
            }, 
            {
                "channel": 289, 
                "count": 4
            }, 
            {
                "channel": 291, 
                "count": 2
            }, 
            {
                "channel": 292, 
                "count": 2
            }, 
            {
                "channel": 293, 
                "count": 1
            }, 
            {
                "channel": 295, 
                "count": 4
            }, 
            {
                "channel": 296, 
                "count": 4
            }, 
            {
                "channel": 297, 
                "count": 3
            }, 
            {
                "channel": 299, 
                "count": 1
            }, 
            {
                "channel": 303, 
                "count": 3
            }, 
            {
                "channel": 305, 
                "count": 4
            }, 
            {
                "channel": 307, 
                "count": 2
            }, 
            {
                "channel": 308, 
                "count": 2
            }, 
            {
                "channel": 309, 
                "count": 1
            }, 
            {
                "channel": 310, 
                "count": 2
            }, 
            {
                "channel": 311, 
                "count": 3
            }, 
            {
                "channel": 313, 
                "count": 6
            }, 
            {
                "channel": 314, 
                "count": 1
            }, 
            {
                "channel": 315, 
                "count": 4
            }, 
            {
                "channel": 317, 
                "count": 1
            }, 
            {
                "channel": 318, 
                "count": 3
            }, 
            {
                "channel": 320, 
                "count": 5
            }, 
            {
                "channel": 322, 
                "count": 3
            }, 
            {
                "channel": 323, 
                "count": 6
            }, 
            {
                "channel": 324, 
                "count": 1
            }, 
            {
                "channel": 325, 
                "count": 1
            }, 
            {
                "channel": 326, 
                "count": 1
            }, 
            {
                "channel": 329, 
                "count": 2
            }, 
            {
                "channel": 330, 
                "count": 4
            }, 
            {
                "channel": 331, 
                "count": 2
            }, 
            {
                "channel": 333, 
                "count": 5
            }, 
            {
                "channel": 335, 
                "count": 4
            }, 
            {
                "channel": 337, 
                "count": 1
            }, 
            {
                "channel": 338, 
                "count": 2
            }, 
            {
                "channel": 340, 
                "count": 5
            }, 
            {
                "channel": 341, 
                "count": 4
            }, 
            {
                "channel": 346, 
                "count": 1
            }, 
            {
                "channel": 347, 
                "count": 2
            }, 
            {
                "channel": 349, 
                "count": 5
            }, 
            {
                "channel": 350, 
                "count": 2
            }, 
            {
                "channel": 351, 
                "count": 1
            }, 
            {
                "channel": 352, 
                "count": 6
            }, 
            {
                "channel": 354, 
                "count": 2
            }, 
            {
                "channel": 357, 
                "count": 3
            }, 
            {
                "channel": 360, 
                "count": 3
            }, 
            {
                "channel": 362, 
                "count": 2
            }, 
            {
                "channel": 364, 
                "count": 3
            }, 
            {
                "channel": 367, 
                "count": 1
            }, 
            {
                "channel": 368, 
                "count": 7
            }, 
            {
                "channel": 369, 
                "count": 2
            }, 
            {
                "channel": 370, 
                "count": 1
            }, 
            {
                "channel": 372, 
                "count": 3
            }, 
            {
                "channel": 373, 
                "count": 2
            }, 
            {
                "channel": 375, 
                "count": 2
            }, 
            {
                "channel": 376, 
                "count": 2
            }, 
            {
                "channel": 380, 
                "count": 5
            }, 
            {
                "channel": 381, 
                "count": 2
            }, 
            {
                "channel": 382, 
                "count": 4
            }, 
            {
                "channel": 383, 
                "count": 3
            }, 
            {
                "channel": 384, 
                "count": 3
            }, 
            {
                "channel": 385, 
                "count": 2
            }, 
            {
                "channel": 386, 
                "count": 4
            }, 
            {
                "channel": 387, 
                "count": 4
            }, 
            {
                "channel": 388, 
                "count": 4
            }, 
            {
                "channel": 389, 
                "count": 2
            }, 
            {
                "channel": 391, 
                "count": 2
            }, 
            {
                "channel": 393, 
                "count": 3
            }, 
            {
                "channel": 394, 
                "count": 3
            }, 
            {
                "channel": 396, 
                "count": 1
            }, 
            {
                "channel": 397, 
                "count": 4
            }, 
            {
                "channel": 399, 
                "count": 1
            }, 
            {
                "channel": 400, 
                "count": 3
            }, 
            {
                "channel": 402, 
                "count": 1
            }, 
            {
                "channel": 404, 
                "count": 3
            }, 
            {
                "channel": 405, 
                "count": 2
            }, 
            {
                "channel": 406, 
                "count": 3
            }, 
            {
                "channel": 407, 
                "count": 2
            }, 
            {
                "channel": 408, 
                "count": 4
            }, 
            {
                "channel": 410, 
                "count": 5
            }, 
            {
                "channel": 411, 
                "count": 2
            }, 
            {
                "channel": 412, 
                "count": 4
            }, 
            {
                "channel": 413, 
                "count": 5
            }, 
            {
                "channel": 414, 
                "count": 6
            }, 
            {
                "channel": 415, 
                "count": 1
            }, 
            {
                "channel": 416, 
                "count": 4
            }, 
            {
                "channel": 417, 
                "count": 1
            }, 
            {
                "channel": 418, 
                "count": 3
            }, 
            {
                "channel": 419, 
                "count": 1
            }, 
            {
                "channel": 420, 
                "count": 4
            }, 
            {
                "channel": 421, 
                "count": 2
            }, 
            {
                "channel": 422, 
                "count": 3
            }, 
            {
                "channel": 423, 
                "count": 2
            }, 
            {
                "channel": 424, 
                "count": 3
            }, 
            {
                "channel": 425, 
                "count": 4
            }, 
            {
                "channel": 426, 
                "count": 4
            }, 
            {
                "channel": 428, 
                "count": 5
            }, 
            {
                "channel": 429, 
                "count": 5
            }, 
            {
                "channel": 430, 
                "count": 2
            }, 
            {
                "channel": 433, 
                "count": 4
            }, 
            {
                "channel": 434, 
                "count": 2
            }, 
            {
                "channel": 436, 
                "count": 2
            }, 
            {
                "channel": 437, 
                "count": 2
            }, 
            {
                "channel": 438, 
                "count": 1
            }, 
            {
                "channel": 439, 
                "count": 2
            }, 
            {
                "channel": 441, 
                "count": 2
            }, 
            {
                "channel": 442, 
                "count": 5
            }, 
            {
                "channel": 443, 
                "count": 2
            }, 
            {
                "channel": 444, 
                "count": 1
            }, 
            {
                "channel": 445, 
                "count": 5
            }, 
            {
                "channel": 447, 
                "count": 1
            }, 
            {
                "channel": 448, 
                "count": 4
            }, 
            {
                "channel": 449, 
                "count": 4
            }, 
            {
                "channel": 451, 
                "count": 3
            }, 
            {
                "channel": 452, 
                "count": 1
            }, 
            {
                "channel": 453, 
                "count": 3
            }, 
            {
                "channel": 455, 
                "count": 3
            }, 
            {
                "channel": 456, 
                "count": 4
            }, 
            {
                "channel": 457, 
                "count": 1
            }, 
            {
                "channel": 458, 
                "count": 4
            }, 
            {
                "channel": 459, 
                "count": 5
            }, 
            {
                "channel": 460, 
                "count": 3
            }, 
            {
                "channel": 461, 
                "count": 3
            }, 
            {
                "channel": 462, 
                "count": 4
            }, 
            {
                "channel": 463, 
                "count": 2
            }, 
            {
                "channel": 464, 
                "count": 5
            }, 
            {
                "channel": 468, 
                "count": 2
            }, 
            {
                "channel": 469, 
                "count": 2
            }, 
            {
                "channel": 470, 
                "count": 3
            }, 
            {
                "channel": 472, 
                "count": 5
            }, 
            {
                "channel": 474, 
                "count": 2
            }, 
            {
                "channel": 477, 
                "count": 1
            }, 
            {
                "channel": 478, 
                "count": 2
            }, 
            {
                "channel": 479, 
                "count": 5
            }, 
            {
                "channel": 480, 
                "count": 1
            }, 
            {
                "channel": 482, 
                "count": 3
            }, 
            {
                "channel": 483, 
                "count": 3
            }, 
            {
                "channel": 485, 
                "count": 3
            }, 
            {
                "channel": 486, 
                "count": 2
            }, 
            {
                "channel": 488, 
                "count": 2
            }, 
            {
                "channel": 490, 
                "count": 3
            }, 
            {
                "channel": 491, 
                "count": 3
            }, 
            {
                "channel": 492, 
                "count": 2
            }, 
            {
                "channel": 493, 
                "count": 3
            }, 
            {
                "channel": 494, 
                "count": 4
            }, 
            {
                "channel": 495, 
                "count": 3
            }, 
            {
                "channel": 497, 
                "count": 7
            }, 
            {
                "channel": 498, 
                "count": 2
            }, 
            {
                "channel": 499, 
                "count": 4
            }, 
            {
                "channel": 500, 
                "count": 5
            }, 
            {
                "channel": 501, 
                "count": 3
            }, 
            {
                "channel": 503, 
                "count": 2
            }, 
            {
                "channel": 505, 
                "count": 6
            }, 
            {
                "channel": 507, 
                "count": 1
            }, 
            {
                "channel": 508, 
                "count": 1
            }, 
            {
                "channel": 509, 
                "count": 3
            }, 
            {
                "channel": 510, 
                "count": 3
            }, 
            {
                "channel": 511, 
                "count": 1
            }, 
            {
                "channel": 512, 
                "count": 8
            }
        ], 
        "run_id": "af307028575a34db3268b4df36412691cb25b558", 
        "segment_duration": 60, 
        "segment_number": 1, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "5.0.11+2b6dbff"
        }, 
        "tracking_id": {
            "asic_id": "415414511", 
            "asic_id_eeprom": "5333661", 
            "asic_temp": "32.945076", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA30000", 
            "device_type": "gridion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.9", 
            "exp_script_name": "5ac268c03773fdf6596417eb4bc5319ddac568c3", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-08-22T07:20:05Z", 
            "flow_cell_id": "FAL00432", 
            "guppy_version": "3.0.6+9999d81", 
            "heatsink_temp": "33.664062", 
            "hostname": "GXB02001", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "6c794a2e-d075-4555-822d-3b0943466d11", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "ml007", 
            "protocol_run_id": "91168a14-3308-42fb-be73-c607a6a35c72", 
            "protocols_version": "4.1.9", 
            "run_id": "af307028575a34db3268b4df36412691cb25b558", 
            "sample_id": "zymo_gradual_reject_40x_hac_post_control", 
            "time_stamp": "2021-07-23T09:19:00Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.4.8"
        }
    }
]